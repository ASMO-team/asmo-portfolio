// PortfolioCart.props.ts
export interface PortfolioCartProps {
  id: number; // Добавьте обязательный id для маршрутизации
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}