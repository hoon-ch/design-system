import * as React from "react";
import { cn } from "@atg-ui/lib";
import { IoIosCloseCircleOutline } from "react-icons/io";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  clearButton?: React.Dispatch<React.SetStateAction<unknown>>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, clearButton, ...props }, ref) => {
    if (icon) {
      return (
        <div className={cn({ "relative flex items-center": icon })}>
          {icon && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            {...props}
            className={cn(
              "peer h-9 flex-1 rounded-md border border-input bg-transparent px-4 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              { "pl-10 pr-4": icon },
              { "pr-10": clearButton },
              "data-[mode=read]:rounded-none data-[mode=read]:border-x-0 data-[mode=read]:border-t-0 data-[mode=read]:shadow-none",
              "data-[mode=edit]:border data-[mode=edit]:border-primary",
              "data-[mode=edit]:data-[error]:border data-[mode=edit]:data-[error]:border-destructive data-[mode=edit]:data-[error]:text-destructive",
              className,
            )}
          />
          {clearButton && (
            <button
              onClick={clearButton}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
            >
              <IoIosCloseCircleOutline className="h-5 w-5" />
            </button>
          )}
        </div>
      );
    } else {
      return (
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "peer flex h-9 w-full rounded-md border border-input bg-transparent px-4 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            "data-[mode=read]:rounded-none data-[mode=read]:border-x-0 data-[mode=read]:border-t-0 data-[mode=read]:shadow-none",
            "data-[mode=edit]:border data-[mode=edit]:border-primary",
            "data-[mode=edit]:data-[error]:border data-[mode=edit]:data-[error]:border-destructive data-[mode=edit]:data-[error]:text-destructive",
            className,
          )}
        />
      );
    }
  },
);

Input.displayName = "Input";

export { Input };
