import mongoose from 'mongoose';

// MongoDB Schemas
const UserActivitySchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  action: { type: String, required: true },
  resource: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  metadata: { type: mongoose.Schema.Types.Mixed },
  ipAddress: String,
  userAgent: String,
});

const AnalyticsSchema = new mongoose.Schema({
  eventType: { type: String, required: true, index: true },
  userId: { type: String, index: true },
  sessionId: String,
  timestamp: { type: Date, default: Date.now },
  data: { type: mongoose.Schema.Types.Mixed },
  location: {
    country: String,
    city: String,
    coordinates: [Number],
  },
});

const NotificationSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['INFO', 'WARNING', 'ERROR', 'SUCCESS'], default: 'INFO' },
  read: { type: Boolean, default: false, index: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date,
  actionUrl: String,
});

const AuditLogSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  action: { type: String, required: true },
  resource: { type: String, required: true },
  resourceId: String,
  oldValue: { type: mongoose.Schema.Types.Mixed },
  newValue: { type: mongoose.Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  ipAddress: String,
  userAgent: String,
});

const ChatHistorySchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  sessionId: { type: String, required: true, index: true },
  messages: [{
    role: { type: String, enum: ['user', 'assistant'], required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    metadata: { type: mongoose.Schema.Types.Mixed },
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FileUploadSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String, required: true },
  url: String,
  category: { type: String, enum: ['PROFILE', 'DOCUMENT', 'IMAGE', 'VIDEO', 'OTHER'], default: 'OTHER' },
  isPublic: { type: Boolean, default: false },
  uploadedAt: { type: Date, default: Date.now },
});

const SettingsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true, index: true },
  preferences: {
    theme: { type: String, enum: ['light', 'dark', 'auto'], default: 'auto' },
    language: { type: String, default: 'en' },
    timezone: { type: String, default: 'UTC' },
    notifications: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
    },
  },
  privacy: {
    profileVisibility: { type: String, enum: ['public', 'friends', 'private'], default: 'private' },
    showEmail: { type: Boolean, default: false },
    showPhone: { type: Boolean, default: false },
  },
  updatedAt: { type: Date, default: Date.now },
});

const Models = {
  UserActivity: mongoose.model('UserActivity', UserActivitySchema),
  Analytics: mongoose.model('Analytics', AnalyticsSchema),
  Notification: mongoose.model('Notification', NotificationSchema),
  AuditLog: mongoose.model('AuditLog', AuditLogSchema),
  ChatHistory: mongoose.model('ChatHistory', ChatHistorySchema),
  FileUpload: mongoose.model('FileUpload', FileUploadSchema),
  Settings: mongoose.model('Settings', SettingsSchema),
};

const seedMongo = async () => {
    try {
        console.log('🔄 Connecting to MongoDB...');
        
        // Connect to MongoDB using environment variable with proper connection options
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/zyvanta';
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 45000,
            retryWrites: true,
            w: 'majority'
        });
        
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        for (const model of Object.values(Models)) {
            await model.deleteMany({});
        }

        // Seed User Activities
        const activities = [
          { userId: 'user1', action: 'LOGIN', resource: 'auth', metadata: { method: 'email' }, ipAddress: '192.168.1.1' },
          { userId: 'user1', action: 'VIEW', resource: 'dashboard', metadata: { page: 'main' }, ipAddress: '192.168.1.1' },
          { userId: 'user2', action: 'CREATE', resource: 'task', metadata: { taskId: 'task1' }, ipAddress: '192.168.1.2' },
          { userId: 'user3', action: 'UPDATE', resource: 'profile', metadata: { field: 'name' }, ipAddress: '192.168.1.3' },
          { userId: 'user1', action: 'LOGOUT', resource: 'auth', metadata: { duration: 3600 }, ipAddress: '192.168.1.1' },
        ];

        await Models.UserActivity.insertMany(activities);

        // Seed Analytics
        const analytics = [
          { eventType: 'PAGE_VIEW', userId: 'user1', sessionId: 'sess1', data: { page: '/dashboard', duration: 45 } },
          { eventType: 'BUTTON_CLICK', userId: 'user1', sessionId: 'sess1', data: { button: 'submit', form: 'contact' } },
          { eventType: 'FORM_SUBMIT', userId: 'user2', sessionId: 'sess2', data: { form: 'registration', success: true } },
          { eventType: 'ERROR', userId: 'user3', sessionId: 'sess3', data: { error: 'validation_failed', field: 'email' } },
          { eventType: 'SEARCH', userId: 'user1', sessionId: 'sess1', data: { query: 'wheat farming', results: 12 } },
        ];

        await Models.Analytics.insertMany(analytics);

        // Seed Notifications
        const notifications = [
          { userId: 'user1', title: 'Welcome to Zyvanta!', message: 'Your account has been successfully created.', type: 'SUCCESS' },
          { userId: 'user1', title: 'Task Reminder', message: 'You have a task due tomorrow: Buy fertilizers', type: 'INFO' },
          { userId: 'user2', title: 'System Maintenance', message: 'Scheduled maintenance tonight at 2 AM', type: 'WARNING' },
          { userId: 'user3', title: 'Profile Updated', message: 'Your profile has been successfully updated.', type: 'SUCCESS' },
          { userId: 'user1', title: 'New Feature', message: 'Check out our new AI-powered crop recommendations!', type: 'INFO' },
        ];

        await Models.Notification.insertMany(notifications);

        // Seed Audit Logs
        const auditLogs = [
          { userId: 'user1', action: 'CREATE', resource: 'user', resourceId: 'user1', newValue: { email: 'user1@example.com' } },
          { userId: 'user2', action: 'UPDATE', resource: 'task', resourceId: 'task1', oldValue: { status: 'PENDING' }, newValue: { status: 'COMPLETED' } },
          { userId: 'admin', action: 'DELETE', resource: 'user', resourceId: 'user_old', oldValue: { email: 'old@example.com' } },
          { userId: 'user3', action: 'LOGIN', resource: 'auth', newValue: { success: true, timestamp: new Date() } },
          { userId: 'user1', action: 'LOGOUT', resource: 'auth', newValue: { success: true, timestamp: new Date() } },
        ];

        await Models.AuditLog.insertMany(auditLogs);

        // Seed Chat History
        const chatHistory = [
          {
            userId: 'user1',
            sessionId: 'chat1',
            messages: [
              { role: 'user', content: 'What is the best time to plant wheat?', timestamp: new Date() },
              { role: 'assistant', content: 'The best time to plant wheat is during the Rabi season, typically from October to December.', timestamp: new Date() },
              { role: 'user', content: 'Which variety is recommended for North India?', timestamp: new Date() },
              { role: 'assistant', content: 'HD-2967 is a high-yielding variety suitable for North India.', timestamp: new Date() },
            ],
          },
          {
            userId: 'user2',
            sessionId: 'chat2',
            messages: [
              { role: 'user', content: 'How to improve soil fertility?', timestamp: new Date() },
              { role: 'assistant', content: 'You can improve soil fertility by adding organic matter, using crop rotation, and applying balanced fertilizers.', timestamp: new Date() },
            ],
          },
        ];

        await Models.ChatHistory.insertMany(chatHistory);

        // Seed File Uploads
        const fileUploads = [
          { userId: 'user1', filename: 'profile1.jpg', originalName: 'my_profile.jpg', mimeType: 'image/jpeg', size: 1024000, path: '/uploads/user1/profile1.jpg', category: 'PROFILE' },
          { userId: 'user2', filename: 'document1.pdf', originalName: 'farm_document.pdf', mimeType: 'application/pdf', size: 2048000, path: '/uploads/user2/document1.pdf', category: 'DOCUMENT' },
          { userId: 'user3', filename: 'crop1.jpg', originalName: 'wheat_field.jpg', mimeType: 'image/jpeg', size: 1536000, path: '/uploads/user3/crop1.jpg', category: 'IMAGE' },
        ];

        await Models.FileUpload.insertMany(fileUploads);

        // Seed Settings
        const settings = [
          {
            userId: 'user1',
            preferences: {
              theme: 'dark',
              language: 'en',
              timezone: 'Asia/Kolkata',
              notifications: { email: true, push: true, sms: false },
            },
            privacy: {
              profileVisibility: 'friends',
              showEmail: false,
              showPhone: false,
            },
          },
          {
            userId: 'user2',
            preferences: {
              theme: 'light',
              language: 'hi',
              timezone: 'Asia/Kolkata',
              notifications: { email: false, push: true, sms: true },
            },
            privacy: {
              profileVisibility: 'public',
              showEmail: true,
              showPhone: false,
            },
          },
          {
            userId: 'user3',
            preferences: {
              theme: 'auto',
              language: 'en',
              timezone: 'UTC',
              notifications: { email: true, push: false, sms: false },
            },
            privacy: {
              profileVisibility: 'private',
              showEmail: false,
              showPhone: false,
            },
          },
        ];

        await Models.Settings.insertMany(settings);

        console.log('✅ MongoDB seeded successfully!');
        console.log(`📊 Created collections:
  - User Activities: ${activities.length}
  - Analytics Events: ${analytics.length}
  - Notifications: ${notifications.length}
  - Audit Logs: ${auditLogs.length}
  - Chat Sessions: ${chatHistory.length}
  - File Uploads: ${fileUploads.length}
  - User Settings: ${settings.length}`);

    } catch (error) {
        console.error('❌ MongoDB seeding error:', error);
        throw error;
    } finally {
        await mongoose.disconnect();
    }
};

export default seedMongo;
