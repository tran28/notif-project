function PageContainer({ children }) {
    return (
        <div className={`flex min-w-screen min-h-screen py-8 px-6`}>
            {children}
        </div>
    );
}

export default PageContainer;