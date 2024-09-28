
export const SpinnerLoading: React.FC<{ loadingText: string }> = ({ loadingText }) => {
    return (
        <div className="text-center py-4">
            <span className="loading loading-spinner loading-md"></span>
            <p>{loadingText}</p>
        </div>
    )
}
