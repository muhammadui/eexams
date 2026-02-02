# Exzams Frontend

> AI-powered, offline-first CBT Platform for Nigerian Schools

## Overview

This is the frontend application for **Exzams**, a Computer-Based Testing (CBT) platform designed specifically for primary and secondary schools in Northern Nigeria. Built with Next.js 16+ and optimized for offline functionality.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16+ (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Components | shadcn/ui |
| State Management | Zustand (with persist) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Offline | Workbox + Dexie.js (IndexedDB) |
| PWA | next-pwa |
| HTTP Client | Axios / Fetch |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/exzams.git
cd exzams/frontend

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

### Environment Variables

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Feature Flags
NEXT_PUBLIC_ENABLE_OFFLINE=true
NEXT_PUBLIC_ENABLE_AI=true

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_SENTRY_DSN=
```

## Project Structure

```
/app
├── (auth)/                    # Authentication pages
│   ├── login/
│   ├── register/
│   ├── forgot-password/
│   └── reset-password/
├── (platform)/                # Authenticated pages
│   ├── super-admin/           # Platform admin dashboard
│   ├── school/                # School admin dashboard
│   ├── teacher/               # Teacher dashboard
│   ├── student/               # Student dashboard
│   └── parent/                # Parent dashboard
├── (exam)/                    # Exam taking interface
│   └── take/[examId]/
├── (practice)/                # Practice exam modules
│   ├── common-entrance/
│   ├── waec/
│   ├── neco/
│   └── jamb/
├── api/                       # API routes (BFF)
├── layout.tsx
└── page.tsx

/components
├── ui/                        # shadcn/ui components
├── forms/                     # Form components
├── dashboard/                 # Dashboard components
├── exam/                      # Exam-related components
└── shared/                    # Shared components

/lib
├── api/                       # API client functions
├── hooks/                     # Custom React hooks
├── stores/                    # Zustand stores
├── utils/                     # Utility functions
├── db/                        # Dexie.js (IndexedDB) setup
└── validations/               # Zod schemas

/public
├── icons/                     # PWA icons
├── images/                    # Static images
└── manifest.json              # PWA manifest
```

## Key Features

### 1. Offline-First Architecture

```typescript
// lib/db/index.ts - Dexie.js setup for IndexedDB
import Dexie from 'dexie';

export class ExzamsDB extends Dexie {
  exams!: Table<OfflineExam>;
  answers!: Table<OfflineAnswer>;
  syncQueue!: Table<SyncItem>;

  constructor() {
    super('exzams');
    this.version(1).stores({
      exams: 'id, status, downloadedAt',
      answers: 'id, examId, syncStatus',
      syncQueue: '++id, type, createdAt'
    });
  }
}
```

### 2. State Management with Zustand

```typescript
// lib/stores/auth.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (credentials) => {
        // Implementation
      },
      logout: () => set({ user: null, token: null }),
    }),
    { name: 'auth-storage' }
  )
);
```

### 3. Role-Based Routing

The app uses Next.js middleware to enforce role-based access:

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const user = decodeToken(token);
  
  // Route protection based on user role
  if (request.nextUrl.pathname.startsWith('/super-admin') && user?.role !== 'super_admin') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // ... more role checks
}
```

## Scripts

```bash
# Development
pnpm dev           # Start dev server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run ESLint
pnpm type-check    # Run TypeScript compiler

# Testing
pnpm test          # Run tests
pnpm test:e2e      # Run E2E tests (Playwright)
```

## Offline Functionality

### How it works:

1. **Exam Download**: Students can download exams when online
2. **Local Storage**: Exams stored in IndexedDB via Dexie.js
3. **Offline Taking**: Full exam functionality without internet
4. **Background Sync**: Answers sync automatically when online
5. **Conflict Resolution**: Smart handling of sync conflicts

### Service Worker

The app uses Workbox for service worker management:

```typescript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    // Caching strategies
  ]
});
```

## Component Examples

### Using shadcn/ui

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function LoginForm() {
  return (
    <Card>
      <CardHeader>Login to Exzams</CardHeader>
      <CardContent>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
      </CardContent>
    </Card>
  );
}
```

## API Integration

```typescript
// lib/api/exams.ts
import { api } from './client';

export const examAPI = {
  getAll: () => api.get('/exams'),
  getById: (id: string) => api.get(`/exams/${id}`),
  download: (id: string) => api.get(`/exams/${id}/download`),
  submit: (id: string, answers: Answer[]) => 
    api.post(`/exams/${id}/submit`, { answers }),
  sync: (id: string, data: SyncData) => 
    api.post(`/exams/${id}/sync`, data),
};
```

## Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make changes and commit: `git commit -m "Add my feature"`
3. Push to branch: `git push origin feature/my-feature`
4. Open a Pull Request

## License

MIT License - see LICENSE file for details.

---

**Exzams** - Empowering Nigerian schools with intelligent assessments.
