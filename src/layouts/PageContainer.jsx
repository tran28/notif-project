function PageContainer({ children }) {
    return (
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-2 md:py-12'>
            {children}
        </div>
    );
}

export default PageContainer;