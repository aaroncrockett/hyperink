export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          created_at: string | null
          id: number
          uuid_id: string
        }
        Insert: {
          created_at?: string | null
          id?: never
          uuid_id?: string
        }
        Update: {
          created_at?: string | null
          id?: never
          uuid_id?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          created_at: string | null
          email: string
          id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
        }
        Relationships: []
      }
      profile_tattoo_options: {
        Row: {
          categories: Json
          created_at: string
          groups: Json
          profile_id: string
          styles: Json
          tags: Json
          updated_at: string
        }
        Insert: {
          categories?: Json
          created_at?: string
          groups?: Json
          profile_id: string
          styles?: Json
          tags?: Json
          updated_at?: string
        }
        Update: {
          categories?: Json
          created_at?: string
          groups?: Json
          profile_id?: string
          styles?: Json
          tags?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_tattoo_options_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tattoo_options: {
        Row: {
          created_at: string
          needles: Json
          tattoo_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          needles?: Json
          tattoo_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          needles?: Json
          tattoo_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tattoo_options_tattoo_id_fkey"
            columns: ["tattoo_id"]
            isOneToOne: true
            referencedRelation: "tattoos"
            referencedColumns: ["id"]
          },
        ]
      }
      tattoo_requests: {
        Row: {
          created_at: string
          email: string | null
          id: number
          notes: string | null
          paid: boolean | null
          phone: string | null
          preferred_name: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          notes?: string | null
          paid?: boolean | null
          phone?: string | null
          preferred_name?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          notes?: string | null
          paid?: boolean | null
          phone?: string | null
          preferred_name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      tattoo_sessions: {
        Row: {
          amount: number
          amount_paid: number
          completed_at: string | null
          created_at: string
          estimated_hours: number | null
          id: string
          notes: string | null
          scheduled_date: string | null
          scheduled_time: string | null
          session_number: number
          tattoo_id: string
          tip: number
          total_hours: number | null
          updated_at: string
        }
        Insert: {
          amount?: number
          amount_paid?: number
          completed_at?: string | null
          created_at?: string
          estimated_hours?: number | null
          id?: string
          notes?: string | null
          scheduled_date?: string | null
          scheduled_time?: string | null
          session_number: number
          tattoo_id: string
          tip?: number
          total_hours?: number | null
          updated_at?: string
        }
        Update: {
          amount?: number
          amount_paid?: number
          completed_at?: string | null
          created_at?: string
          estimated_hours?: number | null
          id?: string
          notes?: string | null
          scheduled_date?: string | null
          scheduled_time?: string | null
          session_number?: number
          tattoo_id?: string
          tip?: number
          total_hours?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tattoo_sessions_tattoo_id_fkey"
            columns: ["tattoo_id"]
            isOneToOne: false
            referencedRelation: "tattoos"
            referencedColumns: ["id"]
          },
        ]
      }
      tattoos: {
        Row: {
          client_id: string
          completed_at: string | null
          created_at: string | null
          deposit_amount: number | null
          deposit_amount_paid_at: string | null
          deposit_amount_paid_progress: number | null
          drawing_amount: number | null
          drawing_amount_paid_at: string | null
          drawing_amount_paid_progress: number | null
          estimated_price: number | null
          estimated_time: number | null
          id: string
          inks: Json | null
          needles_used: Json | null
          notes: string | null
          tipped_total: number | null
          title: string
          total_price: number | null
          type: string | null
        }
        Insert: {
          client_id: string
          completed_at?: string | null
          created_at?: string | null
          deposit_amount?: number | null
          deposit_amount_paid_at?: string | null
          deposit_amount_paid_progress?: number | null
          drawing_amount?: number | null
          drawing_amount_paid_at?: string | null
          drawing_amount_paid_progress?: number | null
          estimated_price?: number | null
          estimated_time?: number | null
          id?: string
          inks?: Json | null
          needles_used?: Json | null
          notes?: string | null
          tipped_total?: number | null
          title: string
          total_price?: number | null
          type?: string | null
        }
        Update: {
          client_id?: string
          completed_at?: string | null
          created_at?: string | null
          deposit_amount?: number | null
          deposit_amount_paid_at?: string | null
          deposit_amount_paid_progress?: number | null
          drawing_amount?: number | null
          drawing_amount_paid_at?: string | null
          drawing_amount_paid_progress?: number | null
          estimated_price?: number | null
          estimated_time?: number | null
          id?: string
          inks?: Json | null
          needles_used?: Json | null
          notes?: string | null
          tipped_total?: number | null
          title?: string
          total_price?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tattoos_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["uuid_id"]
          },
        ]
      }
      user_images: {
        Row: {
          collections: Json | null
          created_at: string | null
          groups: Json | null
          id: string
          name: string | null
          path: string
          styles: Json | null
          tags: Json | null
          tattoo_id: string | null
          user_id: string
        }
        Insert: {
          collections?: Json | null
          created_at?: string | null
          groups?: Json | null
          id?: string
          name?: string | null
          path: string
          styles?: Json | null
          tags?: Json | null
          tattoo_id?: string | null
          user_id: string
        }
        Update: {
          collections?: Json | null
          created_at?: string | null
          groups?: Json | null
          id?: string
          name?: string | null
          path?: string
          styles?: Json | null
          tags?: Json | null
          tattoo_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_images_tattoo_id_fkey"
            columns: ["tattoo_id"]
            isOneToOne: false
            referencedRelation: "tattoos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_images_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      tattoo_collections:
        | "queer & spicey - filtered"
        | "queery & spicey - collage"
        | "neo-expressionist"
        | "pixel tatts"
        | "gaymer/anime"
        | "just whatever"
      tattoo_groups: "flash" | "tattoos" | "hp" | "portfolio-tattoos"
      tattoo_styles:
        | "traditional"
        | "illustrational"
        | "blackwork"
        | "micro"
        | "photo-realism"
      tattoo_tags:
        | "color"
        | "blackwork"
        | "black & gray"
        | "photo-based illustrational"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      tattoo_collections: [
        "queer & spicey - filtered",
        "queery & spicey - collage",
        "neo-expressionist",
        "pixel tatts",
        "gaymer/anime",
        "just whatever",
      ],
      tattoo_groups: ["flash", "tattoos", "hp", "portfolio-tattoos"],
      tattoo_styles: [
        "traditional",
        "illustrational",
        "blackwork",
        "micro",
        "photo-realism",
      ],
      tattoo_tags: [
        "color",
        "blackwork",
        "black & gray",
        "photo-based illustrational",
      ],
    },
  },
} as const
