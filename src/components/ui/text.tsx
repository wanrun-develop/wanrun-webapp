'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // よくある「classNameを結合するためのユーティリティ関数」

// Tailwind CSS のユーティリティクラスをまとめて、バリアント(variants)として管理
const textVariants = cva('leading-normal text-slate-900 dark:text-slate-50', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  /**
   * asChild=true の場合、span 以外の要素（例: p, strong, h1 など）に差し替える。
   *
   * 例: <Text asChild><h1>タイトル</h1></Text>
   */
  asChild?: boolean;
}

/**
 * Radix UI の <Slot> を使った Text コンポーネントの例
 */
export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, size, weight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';

    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ size, weight }), className)}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';
