export default function RegisterPage() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name" className="border p-2 rounded" />
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="password" placeholder="Password" className="border p-2 rounded" />
                <button className="bg-green-600 text-white py-2 rounded">Register</button>
            </form>
        </div>
    );
}
