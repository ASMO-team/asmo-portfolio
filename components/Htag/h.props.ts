// h.props.ts
export interface HProps {
    type: 'h1' | 'h2' | 'h3';
    children: React.ReactNode;
    isNotCenter?: boolean;
    uppercase?: boolean;
    className?: string; // Добавляем это свойство
}