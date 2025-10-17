## RIPT Football Cup - FE (Next.js)

### Cấu trúc thư mục mới

```
app/
  ... (Next.js App Router pages)
src/
  services/
    api.ts
  providers/
    app-providers.tsx
  contexts/
    auth-context.tsx
  hooks/
    use-api.ts
    use-auth.ts
  utils/
    constants.ts
public/
components/
styles/
```

### Cài đặt

```bash
pnpm install
pnpm dev
```

### Biến môi trường

Tạo file `.env.local` theo mẫu sau:

```
NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
NEXT_PUBLIC_AUTH_STORAGE_KEY=ript_fc_token
```

### API client

- `src/services/api.ts`: cấu hình Axios client, interceptor JWT, helpers `get/post/put/del`.

### State & Data fetching

- React Query được bọc trong `AppProviders` (tại `app/layout.tsx`).
- Hook tiện ích: `useApiQuery`, `useApiMutation` trong `src/hooks/use-api.ts`.

### Auth

- `AuthProvider` và `useAuth` (context) quản lý token lưu ở `localStorage`.

### Thông báo

- Sonner Toaster đã được thêm trong `AppProviders`.

### Test (Jest + RTL)

- Cấu hình: `jest.config.ts`, `jest.setup.ts`
- Chạy test: `pnpm jest`


