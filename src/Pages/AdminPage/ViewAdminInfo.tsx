import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Phone, Calendar, Clock, Shield, Mail } from "lucide-react";
import Loader from "../../utils/Loader";
import { useGetSingleAdminQuery } from "../../Redux/features/admin/adminApi";

interface UserData {
    _id: string;
    name: string;
    email: string;
    image?: string;
    status: string;
    phone?: string;
    address?: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

interface ApiResponse {
    data: UserData;
}

const ViewAdminInfo = () => {
    const { id } = useParams();
    const { data: response, isLoading } = useGetSingleAdminQuery(id) as { data: ApiResponse | undefined, isLoading: boolean };
    const user = response?.data;

    if (isLoading) {
        return <Loader />;
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 max-w-5xl mx-auto"
        >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header Section */}
                <div className="relative">
                    <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                    <div className="absolute -bottom-12 left-8 flex items-end gap-6">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-24 bg-white rounded-2xl shadow-lg p-1"
                        >
                            {user?.image ? (
                                <img 
                                    src={user.image} 
                                    alt={user.name} 
                                    className="w-full h-full rounded-xl object-cover"
                                />
                            ) : (
                                <div className="w-full h-full rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <User className="w-12 h-12 text-indigo-600" />
                                </div>
                            )}
                        </motion.div>
                        <div className="mb-3">
                            <h1 className="text-3xl font-bold text-gray-800 tracking-tight ">{user?.name}</h1>
                            
                            <div className="flex items-center gap-2 text-indigo-50 font-medium">
                                <Mail className="w-4 h-4 text-gray-600" />
                                <p className="text-gray-600">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-16 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Status Card */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-5 h-5 text-indigo-600" />
                                    <h3 className="font-semibold text-slate-800">Account Status</h3>
                                </div>
                                <div className={`inline-flex items-center px-4 py-2 rounded-full font-medium ${
                                    user?.status === 'in-progress' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                                }`}>
                                    <span className={`w-2 h-2 rounded-full mr-2 ${
                                        user?.status === 'in-progress' ? 'bg-emerald-500' : 'bg-rose-500'
                                    }`}></span>
                                    {user?.status ? user.status.charAt(0).toUpperCase() + user.status.slice(1) : 'N/A'}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Phone className="w-5 h-5 text-indigo-600" />
                                    <h3 className="font-semibold text-slate-800">Contact Information</h3>
                                </div>
                                <div className="space-y-3 text-slate-600 font-medium">
                                    <p>Phone: {user?.phone || 'Not provided'}</p>
                                    <p>Address: {user?.address || 'Not provided'}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Role Info */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-5 h-5 text-indigo-600" />
                                    <h3 className="font-semibold text-slate-800">Role & Permissions</h3>
                                </div>
                                <p className="text-slate-600 font-medium capitalize">{user?.role}</p>
                            </div>

                            {/* Timestamps */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Calendar className="w-5 h-5 text-indigo-600" />
                                    <h3 className="font-semibold text-slate-800">Account Timeline</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        <p className="text-slate-600 font-medium">
                                            Member since: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'N/A'}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        <p className="text-slate-600 font-medium">
                                            Last updated: {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ViewAdminInfo;
