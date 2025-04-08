export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="rounded-full border border-purple-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
      {children}
    </span>
  );
};
