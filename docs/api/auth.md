# Authentication API

This document describes the authentication endpoints available in Zyvanta.

## Base URL

```
http://localhost:3000/api/auth
```

---

## Endpoints

### 1. Register User

Create a new user account.

**Endpoint**: `POST /api/auth/register`

**Request Body**:

```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Success Response** (200):

```json
{
  "success": true,
  "message": "Registration successful. Please check your email to verify your account.",
  "user": {
    "id": "clx123...",
    "email": "john@example.com",
    "username": "johndoe",
    "name": "John Doe"
  }
}
```

**Error Response** (400):

```json
{
  "error": "Email already exists"
}
```

**Validations**:

- Email must be unique
- Username must be unique
- Password must be at least 8 characters

---

### 2. Login

Authenticate user and create session.

**Endpoint**: `POST /api/auth/signin`

**Request Body**:

```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Success Response** (200):

```json
{
  "user": {
    "id": "clx123...",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "USER"
  },
  "session": {
    "expires": "2026-03-17T10:00:00.000Z"
  }
}
```

**Error Response** (401):

```json
{
  "error": "Invalid credentials"
}
```

---

### 3. Email Verification

Verify user email with token.

**Endpoint**: `GET /api/auth/verify?token=<verification_token>`

**Query Parameters**:

- `token` (required): Verification token sent via email

**Success Response** (200):

```json
{
  "success": true,
  "message": "Email verified successfully"
}
```

**Error Response** (400):

```json
{
  "error": "Invalid or expired token"
}
```

---

### 4. Forgot Password

Request password reset email.

**Endpoint**: `POST /api/auth/forgot-password`

**Request Body**:

```json
{
  "email": "john@example.com"
}
```

**Success Response** (200):

```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

**Error Response** (404):

```json
{
  "error": "User not found"
}
```

---

### 5. Reset Password

Reset user password with token.

**Endpoint**: `POST /api/auth/reset-password`

**Request Body**:

```json
{
  "token": "reset_token_from_email",
  "password": "NewSecurePass456!"
}
```

**Success Response** (200):

```json
{
  "success": true,
  "message": "Password reset successful"
}
```

**Error Response** (400):

```json
{
  "error": "Invalid or expired reset token"
}
```

---

### 6. Logout

End user session.

**Endpoint**: `POST /api/auth/signout`

**Headers**:

```
Authorization: Bearer <session_token>
```

**Success Response** (200):

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## Authentication Flow

### Registration Flow

1. User submits registration form
2. Server validates data (unique email/username)
3. Password is hashed with bcryptjs
4. User created in database with `emailVerified: null`
5. Verification token generated
6. Verification email sent
7. User clicks link in email
8. Token validated and `emailVerified` set to current timestamp

### Login Flow

1. User submits credentials
2. Server finds user by email
3. Password compared with stored hash
4. JWT token generated
5. Session created with NextAuth
6. User redirected to dashboard

### Password Reset Flow

1. User requests password reset
2. Reset token generated and stored
3. Reset email sent with link
4. User clicks link and submits new password
5. Token validated
6. Password updated and token cleared

---

## Session Management

Sessions are managed using **NextAuth.js** with JWT strategy.

### Session Object

```typescript
{
  user: {
    id: string;
    email: string;
    name: string;
    role: "USER" | "ADMIN";
  },
  expires: string; // ISO 8601 date
}
```

### Getting Current Session (Client)

```typescript
import { useSession } from "next-auth/react";

const { data: session, status } = useSession();

if (status === "authenticated") {
  console.log(session.user);
}
```

### Getting Current Session (Server)

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const session = await getServerSession(authOptions);
```

---

## Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Tokens**: Signed with NEXTAUTH_SECRET
- **Email Verification**: Required before full access
- **HTTPS Only**: Cookies set with secure flag in production
- **CSRF Protection**: Built-in with NextAuth
- **Rate Limiting**: Implemented on auth endpoints

---

## Error Codes

| Code | Description                              |
| ---- | ---------------------------------------- |
| 400  | Bad Request - Invalid input data         |
| 401  | Unauthorized - Invalid credentials       |
| 403  | Forbidden - Email not verified           |
| 404  | Not Found - User doesn't exist           |
| 409  | Conflict - Email/username already exists |
| 500  | Internal Server Error                    |

---

## Email Templates

Verification and reset emails are sent using the templates in `src/lib/email.ts`.

### Verification Email

- **Subject**: "Verify your Zyvanta account"
- **Link**: `{NEXTAUTH_URL}/auth/verify?token={verificationToken}`

### Password Reset Email

- **Subject**: "Reset your Zyvanta password"
- **Link**: `{NEXTAUTH_URL}/auth/reset-password?token={resetToken}`
