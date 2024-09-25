export const Contents = ({ height, children }: Content) => {
  return (
    <div className={`w-[325px] ${height} flex flex-col justify-between`}>
      {children}
    </div>
  );
};
export default Contents;
