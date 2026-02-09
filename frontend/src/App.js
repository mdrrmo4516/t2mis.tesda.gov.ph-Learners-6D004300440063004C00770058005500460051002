import { useState, useEffect } from "react";
import "@/App.css";
import { User } from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("training");
  const [mockData, setMockData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setMockData(data))
      .catch(err => console.error('Error loading data:', err));
  }, []);

  if (!mockData) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-[#D3E8EC] px-6 py-4 flex items-center gap-3">
            <User className="w-6 h-6 text-gray-700" data-testid="profile-icon" />
            <h1 className="text-lg font-normal text-gray-800" data-testid="profile-name">
              {mockData.profile.name}
            </h1>
          </div>

          {/* Profile Info */}
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex border-b border-gray-200 pb-3" data-testid="profile-dob">
                <div className="w-1/3 text-gray-700 font-normal">Date of Birth</div>
                <div className="w-2/3 text-gray-600">{mockData.profile.dateOfBirth}</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3" data-testid="profile-sex">
                <div className="w-1/3 text-gray-700 font-normal">Sex:</div>
                <div className="w-2/3 text-gray-600">{mockData.profile.sex}</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3" data-testid="profile-nationality">
                <div className="w-1/3 text-gray-700 font-normal">Nationality:</div>
                <div className="w-2/3 text-gray-600">{mockData.profile.nationality}</div>
              </div>
              <div className="flex pb-3" data-testid="profile-birthplace">
                <div className="w-1/3 text-gray-700 font-normal">Birthplace:</div>
                <div className="w-2/3 text-gray-600">{mockData.profile.birthplace}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("training")}
              className={`px-6 py-3 font-normal ${
                activeTab === "training"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              data-testid="tab-training"
            >
              Training
            </button>
            <button
              onClick={() => setActiveTab("assessment")}
              className={`px-6 py-3 font-normal ${
                activeTab === "assessment"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              data-testid="tab-assessment"
            >
              Assessment
            </button>
            <button
              onClick={() => setActiveTab("renewal")}
              className={`px-6 py-3 font-normal ${
                activeTab === "renewal"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              data-testid="tab-renewal"
            >
              Renewal
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "training" && (
              <div className="overflow-x-auto" data-testid="training-content">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Region</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Province</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">School</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Qualification</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Schedule</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Trainor</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Type of Scholarship</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Training Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.training.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200" data-testid={`training-row-${index}`}>
                        <td className="py-3 px-4 text-gray-600">{item.region}</td>
                        <td className="py-3 px-4 text-gray-600">{item.province}</td>
                        <td className="py-3 px-4 text-gray-600">{item.school}</td>
                        <td className="py-3 px-4 text-gray-600">{item.qualification}</td>
                        <td className="py-3 px-4 text-gray-600">{item.schedule}</td>
                        <td className="py-3 px-4 text-gray-600">{item.trainor}</td>
                        <td className="py-3 px-4 text-gray-600">{item.scholarship}</td>
                        <td className="py-3 px-4 text-gray-600">{item.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "assessment" && (
              <div className="overflow-x-auto" data-testid="assessment-content">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Region</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Province</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Assessment Center</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Qualification</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.assessment.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200" data-testid={`assessment-row-${index}`}>
                        <td className="py-3 px-4 text-gray-600">{item.region}</td>
                        <td className="py-3 px-4 text-gray-600">{item.province}</td>
                        <td className="py-3 px-4 text-gray-600">{item.assessmentCenter}</td>
                        <td className="py-3 px-4 text-gray-600">{item.qualification}</td>
                        <td className="py-3 px-4 text-gray-600">{item.schedule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "renewal" && (
              <div className="overflow-x-auto" data-testid="renewal-content">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Region</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Province</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Qualification</th>
                      <th className="text-left py-3 px-4 font-normal text-gray-700">Valid Until</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.renewal.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200" data-testid={`renewal-row-${index}`}>
                        <td className="py-3 px-4 text-gray-600">{item.region}</td>
                        <td className="py-3 px-4 text-gray-600">{item.province}</td>
                        <td className="py-3 px-4 text-gray-600">{item.qualification}</td>
                        <td className="py-3 px-4 text-gray-600">{item.validUntil}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
