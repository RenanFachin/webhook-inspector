import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { twMerge } from 'tailwind-merge'
import { CheckIcon } from 'lucide-react'

interface CheckBoxProps extends CheckboxPrimitive.CheckboxProps {

}

export function Checkbox(props: CheckBoxProps) {
  return (
    <CheckboxPrimitive.Root
      className={twMerge(
        'flex size-4 shrink-0 items-center justify-center rounded border border-zinc-700 bg-zinc-800 hover:bg-zinc-700/30 transition-colors duration-100  ',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2',
        'data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500/80'
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className='flex items-center justify-center text-zinc-800'>
        <CheckIcon className='size-3' strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}