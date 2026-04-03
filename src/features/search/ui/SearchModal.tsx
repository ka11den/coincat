"use client";

import { useEffect, useRef } from "react";
import { SearchResults } from "./SearchResults";
import { useSearch } from "../api/searchApi";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchModal = ({ isOpen, onClose }: Props) => {
  const { query, setQuery, results, isLoading } = useSearch();

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
        setQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        setQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 sm:pt-32">
        <div
          ref={modalRef}
          className="w-full max-w-2xl animate-in slide-in-from-top-4 duration-300"
        >
          <div className="bg-[#0F0F0F] rounded-xl shadow-2xl border border-[#2A2A2A] overflow-hidden">
            <div className="flex items-center border-b border-[#2A2A2A] p-4">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cryptocurrencies, articles..."
                className="flex-1 bg-transparent outline-none text-[#a0a0a0] placeholder-[#a0a0a0] text-lg"
              />
              <button
                onClick={() => {
                  onClose();
                  setQuery("");
                }}
                className="text-[#a0a0a0] hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto custom-scrollbar">
              <SearchResults
                results={results}
                isLoading={isLoading}
                query={query}
                onClose={onClose}
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-[#2A2A2A] text-xs text-[#a0a0a0]">
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-0.5 text-xs font-mono bg-[#1A1A1A] rounded border border-[#3A3A3A]">
                  ⌘ K
                </kbd>
                <span>to search</span>
              </div>
              <div>
                <kbd className="px-2 py-0.5 text-xs font-mono bg-gray-200 dark:bg-[#1A1A1A] rounded border border-gray-300 dark:border-[#3A3A3A]">
                  ESC
                </kbd>
                <span className="ml-1">to close</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4a4a4a #0f0f0f;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f0f0f;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0f0f0f;
          border-radius: 10px;
          transition: background 0.2s;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0f0f0f;
        }
      `}</style>
    </>
  );
};
