import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { AboutContent, Event, Inquiry, InquiryType } from "../backend";

// ─── About Content ───────────────────────────────────────────────────────────

export function useGetAboutContent() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<AboutContent>({
    queryKey: ["aboutContent"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.getAboutContent();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

// ─── Events ──────────────────────────────────────────────────────────────────

export function useGetEvents() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEvents();
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── Submit Inquiry ───────────────────────────────────────────────────────────

export function useSubmitInquiry() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<
    Inquiry,
    Error,
    {
      name: string;
      email: string;
      organization: string;
      message: string;
      inquiryType: InquiryType;
    }
  >({
    mutationFn: async ({ name, email, organization, message, inquiryType }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitInquiry(
        name,
        email,
        organization,
        message,
        inquiryType,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}

// ─── Initialize Content (admin utility) ──────────────────────────────────────

export function useInitializeContent() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    { mission: string; vision: string; about: string; values: string }
  >({
    mutationFn: async ({ mission, vision, about, values }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.initializeContent(mission, vision, about, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["aboutContent"] });
    },
  });
}
