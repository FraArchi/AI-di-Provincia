# Newsletter Subscribe Action Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the `subscribe` Astro Action for the newsletter using Resend.

**Architecture:** Create a new `actions` directory and an `index.ts` file to define the server actions. The action will use Zod for validation and the Resend SDK for contacting the audience.

**Tech Stack:** Astro Actions, Zod, Resend SDK.

---

### Task 1: Setup Actions Directory

**Files:**
- Create: `src/actions`

- [ ] **Step 1: Create the directory**
Run: `mkdir -p src/actions`

### Task 2: Implement Subscribe Action

**Files:**
- Create: `src/actions/index.ts`

- [ ] **Step 1: Write the implementation**

```typescript
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email("Inserisci un indirizzo email valido"),
    }),
    handler: async ({ email }) => {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        // Tentativo di aggiunta contatto a Resend
        const { data, error } = await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID || '',
        });

        if (error) {
          console.error("Resend Error:", error);
          return { success: false, error: error.message };
        }

        return { success: true };
      } catch (e) {
        console.error("Subscription Error:", e);
        return { success: false, error: "Errore durante l'iscrizione. Riprova più tardi." };
      }
    }
  })
};
```

### Task 3: Verify Syntax

- [ ] **Step 1: Run type check**
Run: `npx tsc --noEmit src/actions/index.ts`
Expected: No errors.

### Task 4: Commit

- [ ] **Step 1: Commit the changes**
Run: `git add src/actions/index.ts && git commit -m "feat: add subscribe astro action"`
