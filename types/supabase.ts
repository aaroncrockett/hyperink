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
          ig_username: string | null
          on_fmltattoo: boolean | null
          onboarded: boolean | null
          uuid_id: string
        }
        Insert: {
          created_at?: string | null
          id?: never
          ig_username?: string | null
          on_fmltattoo?: boolean | null
          onboarded?: boolean | null
          uuid_id?: string
        }
        Update: {
          created_at?: string | null
          id?: never
          ig_username?: string | null
          on_fmltattoo?: boolean | null
          onboarded?: boolean | null
          uuid_id?: string
        }
        Relationships: []
      }
      clients_backup: {
        Row: {
          created_at: string | null
          email: string | null
          fb_username: string | null
          first_name: string | null
          followed_by_fml_artist: boolean | null
          followed_by_fml_uncut: boolean | null
          found_from: string | null
          has_sent_onboarding: boolean | null
          id: number | null
          ig_username: string | null
          last_name: string | null
          on_backup_account: boolean | null
          on_fml_artist: boolean | null
          on_fml_uncut: boolean | null
          phone: string | null
          preferred_name: string | null
          tt_username: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          fb_username?: string | null
          first_name?: string | null
          followed_by_fml_artist?: boolean | null
          followed_by_fml_uncut?: boolean | null
          found_from?: string | null
          has_sent_onboarding?: boolean | null
          id?: number | null
          ig_username?: string | null
          last_name?: string | null
          on_backup_account?: boolean | null
          on_fml_artist?: boolean | null
          on_fml_uncut?: boolean | null
          phone?: string | null
          preferred_name?: string | null
          tt_username?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          fb_username?: string | null
          first_name?: string | null
          followed_by_fml_artist?: boolean | null
          followed_by_fml_uncut?: boolean | null
          found_from?: string | null
          has_sent_onboarding?: boolean | null
          id?: number | null
          ig_username?: string | null
          last_name?: string | null
          on_backup_account?: boolean | null
          on_fml_artist?: boolean | null
          on_fml_uncut?: boolean | null
          phone?: string | null
          preferred_name?: string | null
          tt_username?: string | null
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
      tattoos: {
        Row: {
          client_id: string
          completed_at: string | null
          created_at: string | null
          custom_deposit_amount: number | null
          custom_deposit_paid_at: string | null
          deposit_amount: number | null
          deposit_paid_at: string | null
          estimated_price: number | null
          estimated_sessions: number | null
          estimated_time: number | null
          follow_ups: Json | null
          id: string
          image_url: string | null
          inks: Json | null
          needles_used: Json | null
          price_charged: number | null
          tipped_percent: number | null
          title: string
          type: string | null
        }
        Insert: {
          client_id: string
          completed_at?: string | null
          created_at?: string | null
          custom_deposit_amount?: number | null
          custom_deposit_paid_at?: string | null
          deposit_amount?: number | null
          deposit_paid_at?: string | null
          estimated_price?: number | null
          estimated_sessions?: number | null
          estimated_time?: number | null
          follow_ups?: Json | null
          id?: string
          image_url?: string | null
          inks?: Json | null
          needles_used?: Json | null
          price_charged?: number | null
          tipped_percent?: number | null
          title: string
          type?: string | null
        }
        Update: {
          client_id?: string
          completed_at?: string | null
          created_at?: string | null
          custom_deposit_amount?: number | null
          custom_deposit_paid_at?: string | null
          deposit_amount?: number | null
          deposit_paid_at?: string | null
          estimated_price?: number | null
          estimated_sessions?: number | null
          estimated_time?: number | null
          follow_ups?: Json | null
          id?: string
          image_url?: string | null
          inks?: Json | null
          needles_used?: Json | null
          price_charged?: number | null
          tipped_percent?: number | null
          title?: string
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
          collections:
            | Database["public"]["Enums"]["tattoo_collections"][]
            | null
          created_at: string | null
          groups: Database["public"]["Enums"]["tattoo_groups"][] | null
          id: string
          name: string | null
          path: string
          styles: Database["public"]["Enums"]["tattoo_styles"][] | null
          tags: Database["public"]["Enums"]["tattoo_tags"][] | null
          user_id: string
        }
        Insert: {
          collections?:
            | Database["public"]["Enums"]["tattoo_collections"][]
            | null
          created_at?: string | null
          groups?: Database["public"]["Enums"]["tattoo_groups"][] | null
          id?: string
          name?: string | null
          path: string
          styles?: Database["public"]["Enums"]["tattoo_styles"][] | null
          tags?: Database["public"]["Enums"]["tattoo_tags"][] | null
          user_id: string
        }
        Update: {
          collections?:
            | Database["public"]["Enums"]["tattoo_collections"][]
            | null
          created_at?: string | null
          groups?: Database["public"]["Enums"]["tattoo_groups"][] | null
          id?: string
          name?: string | null
          path?: string
          styles?: Database["public"]["Enums"]["tattoo_styles"][] | null
          tags?: Database["public"]["Enums"]["tattoo_tags"][] | null
          user_id?: string
        }
        Relationships: [
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
