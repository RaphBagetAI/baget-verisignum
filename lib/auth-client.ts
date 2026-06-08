// This file is a placeholder to fix the build error.
// The actual implementation of these functions is not required for this task.

type AuthResult = {
  ok: boolean;
  error?: {
    message: string;
  };
};

const authClient = {
  login: async (credentials: any): Promise<AuthResult> => {
    console.log("login", credentials);
    return { ok: true };
  },
  signup: async (credentials: any): Promise<AuthResult> => {
    console.log("signup", credentials);
    return { ok: true };
  },
};

export { authClient };
