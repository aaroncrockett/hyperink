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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      client: {
        Row: {
          bluesky_id: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          gender: string | null
          id: string
          instagram_id: string | null
          last_name: string | null
          phone: string | null
          preferred_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          bluesky_id?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          instagram_id?: string | null
          last_name?: string | null
          phone?: string | null
          preferred_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          bluesky_id?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          instagram_id?: string | null
          last_name?: string | null
          phone?: string | null
          preferred_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      client_tattoo: {
        Row: {
          client_id: string
          completed_at: string | null
          created_at: string
          deposit_amount: number | null
          deposit_amount_paid: number | null
          deposit_amount_paid_at: string | null
          drawing_amount: number | null
          drawing_amount_paid: number | null
          drawing_amount_paid_at: string | null
          estimated_hours: number | null
          estimated_price: number | null
          flash_id: string | null
          id: string
          inks_used: Json | null
          my_total_farout_reschedules: number | null
          my_total_nearby_reschedules: number | null
          my_total_noshows: number | null
          needles_used: Json | null
          notes: string | null
          required_aftercare_given: boolean | null
          required_id_checked: boolean | null
          required_pre_paperwork_complete: boolean | null
          title: string
          total_farout_reschedules: number | null
          total_nearby_reschedules: number | null
          total_noshows: number | null
          total_price: number | null
          total_price_paid: number | null
          total_price_paid_at: string | null
          total_session_hours: number | null
          total_tattooed_hours: number | null
          total_tipped_paid: number | null
          type: string | null
          updated_at: string
        }
        Insert: {
          client_id: string
          completed_at?: string | null
          created_at?: string
          deposit_amount?: number | null
          deposit_amount_paid?: number | null
          deposit_amount_paid_at?: string | null
          drawing_amount?: number | null
          drawing_amount_paid?: number | null
          drawing_amount_paid_at?: string | null
          estimated_hours?: number | null
          estimated_price?: number | null
          flash_id?: string | null
          id?: string
          inks_used?: Json | null
          my_total_farout_reschedules?: number | null
          my_total_nearby_reschedules?: number | null
          my_total_noshows?: number | null
          needles_used?: Json | null
          notes?: string | null
          required_aftercare_given?: boolean | null
          required_id_checked?: boolean | null
          required_pre_paperwork_complete?: boolean | null
          title: string
          total_farout_reschedules?: number | null
          total_nearby_reschedules?: number | null
          total_noshows?: number | null
          total_price?: number | null
          total_price_paid?: number | null
          total_price_paid_at?: string | null
          total_session_hours?: number | null
          total_tattooed_hours?: number | null
          total_tipped_paid?: number | null
          type?: string | null
          updated_at?: string
        }
        Update: {
          client_id?: string
          completed_at?: string | null
          created_at?: string
          deposit_amount?: number | null
          deposit_amount_paid?: number | null
          deposit_amount_paid_at?: string | null
          drawing_amount?: number | null
          drawing_amount_paid?: number | null
          drawing_amount_paid_at?: string | null
          estimated_hours?: number | null
          estimated_price?: number | null
          flash_id?: string | null
          id?: string
          inks_used?: Json | null
          my_total_farout_reschedules?: number | null
          my_total_nearby_reschedules?: number | null
          my_total_noshows?: number | null
          needles_used?: Json | null
          notes?: string | null
          required_aftercare_given?: boolean | null
          required_id_checked?: boolean | null
          required_pre_paperwork_complete?: boolean | null
          title?: string
          total_farout_reschedules?: number | null
          total_nearby_reschedules?: number | null
          total_noshows?: number | null
          total_price?: number | null
          total_price_paid?: number | null
          total_price_paid_at?: string | null
          total_session_hours?: number | null
          total_tattooed_hours?: number | null
          total_tipped_paid?: number | null
          type?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_tattoo_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client"
            referencedColumns: ["id"]
          },
        ]
      }
      client_tattoo_session: {
        Row: {
          client_tattoo_id: string
          completed_at: string | null
          created_at: string
          farout_reschedule: boolean | null
          id: string
          my_farout_reschedules: number | null
          my_nearby_reschedules: number | null
          my_noshows: number | null
          nearby_reschedule: boolean | null
          noshow: boolean | null
          notes: string | null
          price_paid: number
          scheduled_date: string | null
          scheduled_time: string | null
          session_hours: number | null
          session_number: number
          tattooed_hours: number | null
          tip_paid: number
          updated_at: string
        }
        Insert: {
          client_tattoo_id: string
          completed_at?: string | null
          created_at?: string
          farout_reschedule?: boolean | null
          id?: string
          my_farout_reschedules?: number | null
          my_nearby_reschedules?: number | null
          my_noshows?: number | null
          nearby_reschedule?: boolean | null
          noshow?: boolean | null
          notes?: string | null
          price_paid?: number
          scheduled_date?: string | null
          scheduled_time?: string | null
          session_hours?: number | null
          session_number: number
          tattooed_hours?: number | null
          tip_paid?: number
          updated_at?: string
        }
        Update: {
          client_tattoo_id?: string
          completed_at?: string | null
          created_at?: string
          farout_reschedule?: boolean | null
          id?: string
          my_farout_reschedules?: number | null
          my_nearby_reschedules?: number | null
          my_noshows?: number | null
          nearby_reschedule?: boolean | null
          noshow?: boolean | null
          notes?: string | null
          price_paid?: number
          scheduled_date?: string | null
          scheduled_time?: string | null
          session_hours?: number | null
          session_number?: number
          tattooed_hours?: number | null
          tip_paid?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_tattoo_session_client_tattoo_id_fkey"
            columns: ["client_tattoo_id"]
            isOneToOne: false
            referencedRelation: "client_tattoo"
            referencedColumns: ["id"]
          },
        ]
      }
      client_tattoo_touchup: {
        Row: {
          client_tattoo_id: string
          completed_at: string | null
          created_at: string
          farout_reschedule: boolean | null
          id: string
          nearby_reschedule: boolean | null
          noshow: boolean | null
          notes: string | null
          price: number
          price_paid: number
          scheduled_date: string | null
          scheduled_time: string | null
          session_hours: number | null
          tattooed_hours: number | null
          tip_paid: number
          touchup_number: number
          updated_at: string
        }
        Insert: {
          client_tattoo_id: string
          completed_at?: string | null
          created_at?: string
          farout_reschedule?: boolean | null
          id?: string
          nearby_reschedule?: boolean | null
          noshow?: boolean | null
          notes?: string | null
          price?: number
          price_paid?: number
          scheduled_date?: string | null
          scheduled_time?: string | null
          session_hours?: number | null
          tattooed_hours?: number | null
          tip_paid?: number
          touchup_number: number
          updated_at?: string
        }
        Update: {
          client_tattoo_id?: string
          completed_at?: string | null
          created_at?: string
          farout_reschedule?: boolean | null
          id?: string
          nearby_reschedule?: boolean | null
          noshow?: boolean | null
          notes?: string | null
          price?: number
          price_paid?: number
          scheduled_date?: string | null
          scheduled_time?: string | null
          session_hours?: number | null
          tattooed_hours?: number | null
          tip_paid?: number
          touchup_number?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_tattoo_touchup_client_tattoo_id_fkey"
            columns: ["client_tattoo_id"]
            isOneToOne: false
            referencedRelation: "client_tattoo"
            referencedColumns: ["id"]
          },
        ]
      }
      flash: {
        Row: {
          collection: string
          created_at: string | null
          id: string
          isPublic: boolean | null
          meta_data: Json | null
          name: string | null
          notes: string | null
          path: string
          pinned_order: number | null
          readable_name: string
          remaining_availability: number | null
          sold_at: string | null
          styles: Json
          tags: Json | null
          total_availability: number | null
          user_id: string
        }
        Insert: {
          collection: string
          created_at?: string | null
          id?: string
          isPublic?: boolean | null
          meta_data?: Json | null
          name?: string | null
          notes?: string | null
          path: string
          pinned_order?: number | null
          readable_name: string
          remaining_availability?: number | null
          sold_at?: string | null
          styles?: Json
          tags?: Json | null
          total_availability?: number | null
          user_id: string
        }
        Update: {
          collection?: string
          created_at?: string | null
          id?: string
          isPublic?: boolean | null
          meta_data?: Json | null
          name?: string | null
          notes?: string | null
          path?: string
          pinned_order?: number | null
          readable_name?: string
          remaining_availability?: number | null
          sold_at?: string | null
          styles?: Json
          tags?: Json | null
          total_availability?: number | null
          user_id?: string
        }
        Relationships: []
      }
      flash_options: {
        Row: {
          created_at: string
          default_collection: string | null
          filter_by_styles: boolean
          filter_by_tags: boolean
          id: string
          show_sold_out: boolean
          show_upon_upload: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          default_collection?: string | null
          filter_by_styles?: boolean
          filter_by_tags?: boolean
          id?: string
          show_sold_out?: boolean
          show_upon_upload?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          default_collection?: string | null
          filter_by_styles?: boolean
          filter_by_tags?: boolean
          id?: string
          show_sold_out?: boolean
          show_upon_upload?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          artist_id: string | null
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          artist_id?: string | null
          created_at?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          artist_id?: string | null
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Relationships: []
      }
      profile_image: {
        Row: {
          created_at: string | null
          id: string
          meta_data: Json | null
          name: string | null
          path: string
          readable_name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          meta_data?: Json | null
          name?: string | null
          path: string
          readable_name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          meta_data?: Json | null
          name?: string | null
          path?: string
          readable_name?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profile_tagging_options: {
        Row: {
          avail_tattoo_sizes: Json | null
          collections: Json
          created_at: string
          id: string
          inks: Json | null
          needles: Json | null
          placement_locations: Json | null
          studio_locations: Json | null
          styles: Json
          tags: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          avail_tattoo_sizes?: Json | null
          collections?: Json
          created_at?: string
          id?: string
          inks?: Json | null
          needles?: Json | null
          placement_locations?: Json | null
          studio_locations?: Json | null
          styles?: Json
          tags?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          avail_tattoo_sizes?: Json | null
          collections?: Json
          created_at?: string
          id?: string
          inks?: Json | null
          needles?: Json | null
          placement_locations?: Json | null
          studio_locations?: Json | null
          styles?: Json
          tags?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tattoo_image: {
        Row: {
          client_tattoo_id: string
          collectoin: string | null
          created_at: string | null
          flash_id: string | null
          id: string
          is_portfolio_img: boolean | null
          meta_data: Json | null
          name: string | null
          path: string
          pinned_order: number | null
          readable_name: string | null
          set_id: string | null
          set_order: number | null
          styles: Json
          tags: Json
        }
        Insert: {
          client_tattoo_id: string
          collectoin?: string | null
          created_at?: string | null
          flash_id?: string | null
          id?: string
          is_portfolio_img?: boolean | null
          meta_data?: Json | null
          name?: string | null
          path: string
          pinned_order?: number | null
          readable_name?: string | null
          set_id?: string | null
          set_order?: number | null
          styles?: Json
          tags?: Json
        }
        Update: {
          client_tattoo_id?: string
          collectoin?: string | null
          created_at?: string | null
          flash_id?: string | null
          id?: string
          is_portfolio_img?: boolean | null
          meta_data?: Json | null
          name?: string | null
          path?: string
          pinned_order?: number | null
          readable_name?: string | null
          set_id?: string | null
          set_order?: number | null
          styles?: Json
          tags?: Json
        }
        Relationships: [
          {
            foreignKeyName: "tattoo_image_client_tattoo_id_fkey"
            columns: ["client_tattoo_id"]
            isOneToOne: false
            referencedRelation: "client_tattoo"
            referencedColumns: ["id"]
          },
        ]
      }
      tattoo_request: {
        Row: {
          bluesky_id: string | null
          client_tattoo_id: string | null
          created_at: string
          description: string | null
          email: string
          first_name: string | null
          flash_id: string | null
          gender: string | null
          id: string
          instagram_id: string | null
          last_name: string | null
          notes: string | null
          of_age: boolean | null
          paid_amount: boolean | null
          phone: string
          placement: string | null
          preferred_name: string
          ref_images: Json | null
          seen_at: string | null
          size: string | null
          type: string | null
          updated_at: string
          user_id: string
          year_born: number | null
        }
        Insert: {
          bluesky_id?: string | null
          client_tattoo_id?: string | null
          created_at?: string
          description?: string | null
          email: string
          first_name?: string | null
          flash_id?: string | null
          gender?: string | null
          id?: string
          instagram_id?: string | null
          last_name?: string | null
          notes?: string | null
          of_age?: boolean | null
          paid_amount?: boolean | null
          phone: string
          placement?: string | null
          preferred_name: string
          ref_images?: Json | null
          seen_at?: string | null
          size?: string | null
          type?: string | null
          updated_at?: string
          user_id: string
          year_born?: number | null
        }
        Update: {
          bluesky_id?: string | null
          client_tattoo_id?: string | null
          created_at?: string
          description?: string | null
          email?: string
          first_name?: string | null
          flash_id?: string | null
          gender?: string | null
          id?: string
          instagram_id?: string | null
          last_name?: string | null
          notes?: string | null
          of_age?: boolean | null
          paid_amount?: boolean | null
          phone?: string
          placement?: string | null
          preferred_name?: string
          ref_images?: Json | null
          seen_at?: string | null
          size?: string | null
          type?: string | null
          updated_at?: string
          user_id?: string
          year_born?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tattoo_request_client_tattoo_id_fkey"
            columns: ["client_tattoo_id"]
            isOneToOne: false
            referencedRelation: "client_tattoo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tattoo_request_flash_id_fkey"
            columns: ["flash_id"]
            isOneToOne: false
            referencedRelation: "flash"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
