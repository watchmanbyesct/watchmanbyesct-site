import { createClient, type SupabaseClient } from '@supabase/supabase-js'

function normalizeEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  if (!trimmed || trimmed === '""' || trimmed === "''") return undefined
  return trimmed.replace(/^["']|["']$/g, '')
}

const supabaseUrl = normalizeEnv(import.meta.env.VITE_SUPABASE_URL)
const supabaseAnonKey = normalizeEnv(import.meta.env.VITE_SUPABASE_ANON_KEY)

export function isSupabaseConfigured(): boolean {
  return Boolean(
    supabaseUrl?.startsWith('http') &&
    supabaseAnonKey &&
    supabaseAnonKey.length > 20,
  )
}

export const supabase: SupabaseClient = isSupabaseConfigured()
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : (createClient('https://placeholder.supabase.co', 'placeholder-key') as SupabaseClient)
