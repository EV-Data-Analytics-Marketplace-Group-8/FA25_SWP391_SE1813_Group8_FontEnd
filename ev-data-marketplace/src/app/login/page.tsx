export default function LoginPage() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form className="flex flex-col gap-3">
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="password" placeholder="Password" className="border p-2 rounded" />
                <button className="bg-blue-600 text-white py-2 rounded">Login</button>
            </form>
        </div>
    );
}
