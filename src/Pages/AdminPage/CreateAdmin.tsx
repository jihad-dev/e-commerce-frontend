import { useCreateAdminMutation } from "../../Redux/features/admin/adminApi";
import Loader from "../../utils/Loader";
const CreateAdmin = () => {
    const [createAdmin, { isLoading }] = useCreateAdminMutation();
    if(isLoading){
        return <Loader/>
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
       
        const data = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            role: "admin",
            status: "in-progress",
            isDeleted: false
          };
          
        console.log(data);
      const res = await createAdmin(data);
      console.log(res);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Create Admin</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Create Admin
                </button>
            </form>
        </div>
    );
};

export default CreateAdmin;
