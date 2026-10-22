import React, { useState } from 'react';
import './App.css'; // Connects to your custom regular CSS file

export default function App() {
  // Using React state to hold your dynamic job object variables
  const [jobs, setJobs] = useState([
    { id: 1, title: "React Frontend Developer", applications: 14, status: "Active" },
    { id: 2, title: "UI/UX Designer", applications: 5, status: "Active" },
    { id: 3, title: "Python Backend Developer", applications: 9, status: "Closed" }
  ]);

  return (
    <div className="dashboard-container">
      {/* Upper Navigation Layout Row */}
      <div className="header-panel">
        <div>
          <h1 className="brand-title">HireSphere</h1>
          <p style={{ color: '#6b7280', margin: '5px 0 0 0' }}>Employer Management Workspace</p>
        </div>
        <button className="post-button">+ Post a Job</button>
      </div>

      {/* Analytics Card Row Elements */}
      <div className="stats-grid">
        <div className="stats-card">
          <div style={{ color: '#9ca3af', fontSize: '12px', fontBold: 'bold' }}>ACTIVE POSITIONS</div>
          <div className="stats-number">{jobs.filter(j => j.status === 'Active').length}</div>
        </div>
        <div className="stats-card">
          <div style={{ color: '#9ca3af', fontSize: '12px', fontBold: 'bold' }}>TOTAL RESUMES</div>
          <div className="stats-number">28</div>
        </div>
        <div className="stats-card">
          <div style={{ color: '#9ca3af', fontSize: '12px', fontBold: 'bold' }}>INTERVIEWS FIXED</div>
          <div className="stats-number">6</div>
        </div>
      </div>

      {/* Main Administrative Listing Data Window */}
      <div className="table-card">
        <div className="table-header">Current Job Openings</div>
        <table className="job-table">
          <thead>
            <tr style={{ color: '#6b7280', fontSize: '12px' }}>
              <th>JOB POSITION</th>
              <th>STATUS INDICATOR</th>
              <th>APPLICANTS COUNT</th>
              <th style={{ textAlign: 'right' }}>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td style={{ fontWeight: 'bold' }}>{job.title}</td>
                <td>
                  <span className="status-badge" style={{ 
                    backgroundColor: job.status === 'Active' ? '#d1fae5' : '#f3f4f6',
                    color: job.status === 'Active' ? '#065f46' : '#374151'
                  }}>
                    {job.status}
                  </span>
                </td>
                <td>{job.applications} Applications</td>
                <td style={{ textAlign: 'right' }}>
                  <button className="action-button">Review Candidates</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
