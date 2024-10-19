import React, { useState, useMemo } from "react";
import { Edit, Trash2, Eye } from 'lucide-react';

const ProjectRow = ({ project, index, handleView, handleEdit, handleDelete }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6 text-sm font-medium text-gray-900">{index + 1}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{project.name}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{project.description.split(" ").slice(0, 3).join(" ")}...</td>
      <td className="py-4 px-6 text-sm text-gray-500">{project.location}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(project.amount)}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{new Date(project.date).toLocaleDateString()}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{project.time}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{project.phoneNumber}</td>
      <td className="py-4 px-6 text-sm text-gray-500">{project.email}</td>
      <td className="py-4 px-6 text-sm font-medium space-x-2">
        <button
          onClick={() => handleEdit(project)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          <Edit className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleDelete(project)}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleView(project)}
          className="text-green-600 hover:text-green-900"
        >
          <Eye className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

const ProjectTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(
    () => [
      {
        id: 1,
        name: "Project Alpha",
        description: "Detailed description of Project Alpha with more info.",
        location: "New York, USA",
        amount: 10000,
        date: "2024-10-01",
        time: "10:30 AM",
        phoneNumber: "123-456-7890",
        email: "alpha@example.com",
      },
      {
        id: 2,
        name: "Project Beta",
        description: "Detailed description of Project Beta with more info.",
        location: "London, UK",
        amount: 20000,
        date: "2024-10-05",
        time: "2:00 PM",
        phoneNumber: "987-654-3210",
        email: "beta@example.com",
      },
      {
        id: 3,
        name: "Project Gamma",
        description: "Detailed description of Project Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
      },
    ],
    []
  );

  const handleView = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleEdit = (project) => {
    alert(`Editing ${project.name}`);
  };

  const handleDelete = (project) => {
    alert(`Deleting ${project.name}`);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Project Details: {selectedProject.name}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500"><strong>Description:</strong> {selectedProject.description}</p>
                  <p className="text-sm text-gray-500"><strong>Location:</strong> {selectedProject.location}</p>
                  <p className="text-sm text-gray-500"><strong>Amount:</strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selectedProject.amount)}</p>
                  <p className="text-sm text-gray-500"><strong>Date:</strong> {new Date(selectedProject.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500"><strong>Time:</strong> {selectedProject.time}</p>
                  <p className="text-sm text-gray-500"><strong>Phone Number:</strong> {selectedProject.phoneNumber}</p>
                  <p className="text-sm text-gray-500"><strong>Email:</strong> {selectedProject.email}</p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTable;