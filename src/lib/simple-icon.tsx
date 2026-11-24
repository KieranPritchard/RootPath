export const SimpleIcon = ({ icon }: { icon: { path: string } }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon.path} />
  </svg>
);