
export default  function ComplexLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login:React.ReactNode;
}) {
    const isLoggedIn=true
  return isLoggedIn? (
    <div>
      <div>{children}</div>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex justify-between space-x-4">
          <div className="w-full">{users}</div>
          <div className="w-full">{revenue}</div>
        </div>
        <div >{notifications}</div>
      </div>
    </div>
  ):(
    <div>
      {login}
    </div>
  );
}
