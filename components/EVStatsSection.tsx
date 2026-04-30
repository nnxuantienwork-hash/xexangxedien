'use client';

import { motion } from 'framer-motion';
import { Car, Bike, Zap, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const barData = [
  { name: 'Ô tô điện', value: 215, fill: '#3B82F6' },
  { name: 'Xe máy điện', value: 2600, fill: '#10B981' },
];

const pieData = [
  { name: 'Xe điện (0,25%)', value: 0.25, color: '#F59E0B' },
  { name: 'Nhu cầu khác (99,75%)', value: 99.75, color: '#E5E7EB' },
];

const stats = [
  { 
    icon: Car, 
    label: 'Ô tô điện', 
    value: '215.000', 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  { 
    icon: Bike, 
    label: 'Xe máy điện', 
    value: '2.6 triệu', 
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  { 
    icon: Zap, 
    label: 'Nhu cầu điện', 
    value: '652 triệu kWh', 
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  { 
    icon: TrendingUp, 
    label: 'Tỷ lệ tiêu thụ điện', 
    value: '0,2 - 0,3%', 
    color: 'text-violet-500',
    bgColor: 'bg-violet-50'
  },
];

export function EVStatsSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Xe Điện Việt Nam 2025
          </h2>
          <p className="text-slate-500 text-lg">
            215.000 ô tô điện • 2,6 triệu xe máy điện • 652 triệu kWh
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-full mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
              <p className="text-xl md:text-2xl font-bold text-slate-800">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              So Sánh Số Lượng (nghìn xe)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                    axisLine={{ stroke: '#E5E7EB' }}
                  />
                  <YAxis 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                    axisLine={{ stroke: '#E5E7EB' }}
                    tickFormatter={(value) => value.toLocaleString()}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Tỷ Lệ Tiêu Thụ Điện Thương Phẩm
            </h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={({ name, value, cx, x }) => {
                      const isLeft = x < cx;
                      return (
                        <text
                          x={x}
                          y={50}
                          textAnchor={isLeft ? 'end' : 'start'}
                          fill={value < 1 ? '#F59E0B' : '#9CA3AF'}
                          fontSize={14}
                          fontWeight={value < 1 ? 600 : 400}
                        >
                          {value < 1 ? `${value}%` : `${value}%`}
                        </text>
                      );
                    }}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value) => <span className="text-sm text-slate-600">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-500 mt-2">
              Xe điện: <span className="text-amber-500 font-semibold">0,2-0,3%</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
