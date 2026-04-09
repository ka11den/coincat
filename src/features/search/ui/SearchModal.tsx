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
          <div className="bg-surface rounded-xl shadow-2xl border border-border overflow-hidden">
            <div className="flex items-center border-b border-border p-4">
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
                className="flex-1 bg-transparent outline-none text-text-secondary placeholder-text-text-secondary text-lg"
              />
              <button
                onClick={() => {
                  onClose();
                  setQuery("");
                }}
                className="text-text-secondary hover:hover transition-colors"
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

            <div className="flex items-center justify-between px-4 py-3 bg-surface border-t border-border text-xs text-text-secondary">
              <div className="flex items-center gap-3">
                <kbd className="px-2 py-0.5 text-xs font-mono bg-background rounded border border-border">
                  ⌘ K
                </kbd>
                <span>to search</span>
              </div>
              <div>
                <kbd className="px-2 py-0.5 text-xs font-mono bg-background rounded border border-border">
                  ESC
                </kbd>
                <span className="ml-1">to close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
