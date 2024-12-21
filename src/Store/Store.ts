import { create } from "zustand";

interface Recording {
  name: string;
  audio: string;
  language: string;
}

interface RecordingState {
  audioURLs: Recording[]; // List of recordings
  addRecording: (recording: Recording) => void;
  removeRecording: (id: number) => void;
  clearRecordings: () => void;
  lang: string;
  changeLang: (val: string) => void;
}

export const useStore = create<RecordingState>((set) => ({
  audioURLs: [],
  addRecording: (recording) =>
    set((state) => ({
      audioURLs: [...state.audioURLs, recording],
    })),
  removeRecording: (id) =>
    set((state) => ({
      audioURLs: state.audioURLs.filter( (_: any, i: number) => i !== id),
    })),
  clearRecordings: () => set(() => ({ audioURLs: [] })),
  lang: "persian",
  changeLang: (val) =>
    set((state) => ({
      ...state,
      lang: val,
    })),
}));
