const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full bg-gradient-to-br from-sky-400 to-blue-800 flex items-center justify-center">
            {children}
        </div>
    );
};

export default AuthLayout;