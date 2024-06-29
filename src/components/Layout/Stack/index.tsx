import { cn } from '@/utils/cn'
import { Box, BoxProps } from '@/components';

type StackProps = BoxProps;

const Stack = ({className, ...props}: StackProps) => {
	return <Box className={cn('flex flex-col items-start', className)} {...props}/>;
};

export default Stack;
export type { StackProps };