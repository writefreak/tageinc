"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Dropdown({
  icon,
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  options: string[];
  value?: string;
  onChange?: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string | null>(null);

  const selected = value !== undefined ? value : internalSelected;

  const [coords, setCoords] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCoords = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  const toggleOpen = () => {
    if (!open) updateCoords();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", updateCoords);
      window.addEventListener("scroll", updateCoords);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-2">
      <div className="flex items-center font-sans text-xs md:text-sm gap-2 font-semibold text-white">
        {icon}
        {label}
      </div>

      <button
        ref={buttonRef}
        type="button"
        onClick={toggleOpen}
        className="flex w-full items-center justify-between rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-left text-sm font-semibold text-white outline-none transition focus:border-orange-500"
      >
        <span className={selected ? "text-white" : "text-white/60"}>
          {selected || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-white/70" />
        </motion.span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: `${coords.top}px`,
                  left: `${coords.left}px`,
                  width: `${coords.width}px`,
                }}
                className="z-[9999] max-h-60 overflow-y-auto rounded-xl border border-white/10 bg-neutral-900/95 p-1 shadow-2xl backdrop-blur-md"
              >
                {options.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        if (onChange) {
                          onChange(option);
                        } else {
                          setInternalSelected(option);
                        }
                        setOpen(false);
                      }}
                      className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-white/90 transition hover:bg-orange-600/20 hover:text-white"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
