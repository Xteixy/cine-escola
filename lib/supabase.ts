import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      movies: {
        Row: {
          id: number
          title: string
          description: string | null
          genre: string
          year: number
          rating: number
          duration: string | null
          director: string | null
          "cast": string[] | null
          image_url: string | null
          trailer_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          description?: string | null
          genre: string
          year: number
          rating: number
          duration?: string | null
          director?: string | null
          cast?: string[] | null
          image_url?: string | null
          trailer_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          description?: string | null
          genre?: string
          year?: number
          rating?: number
          duration?: string | null
          director?: string | null
          cast?: string[] | null
          image_url?: string | null
          trailer_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      votes: {
        Row: {
          id: number
          user_id: string
          movie_id: number
          voting_session_id: number
          created_at: string
        }
        Insert: {
          id?: number
          user_id: string
          movie_id: number
          voting_session_id: number
          created_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          movie_id?: number
          voting_session_id?: number
          created_at?: string
        }
      }
      voting_sessions: {
        Row: {
          id: number
          title: string
          description: string | null
          start_date: string
          end_date: string
          status: 'active' | 'completed' | 'upcoming'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          description?: string | null
          start_date: string
          end_date: string
          status?: 'active' | 'completed' | 'upcoming'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string
          status?: 'active' | 'completed' | 'upcoming'
          created_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: number
          user_id: string
          movie_id: number
          created_at: string
        }
        Insert: {
          id?: number
          user_id: string
          movie_id: number
          created_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          movie_id?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: number
          user_id: string
          movie_id: number
          rating: number
          comment: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          user_id: string
          movie_id: number
          rating: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          movie_id?: number
          rating?: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
