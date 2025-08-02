import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const WidgetSettings = () => {
  const { widgetId } = useParams();

  const [settings, setSettings] = useState({
    title: '',
    showTitle: true,
    refreshInterval: 30,
  });

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    alert(
      `Settings saved for widget ${widgetId}:\n${JSON.stringify(settings, null, 2)}`
    );
  }, [settings, widgetId]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
      <h1 className="text-2xl font-bold mb-6">
        Settings for <span className="text-blue-600">{widgetId}</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={settings.title}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
          />
        </div>

        <div className="flex items-center">
          <input
            id="showTitle"
            type="checkbox"
            name="showTitle"
            checked={settings.showTitle}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="showTitle" className="text-sm text-gray-700">
            Show title
          </label>
        </div>

        <div>
          <label htmlFor="refreshInterval" className="block text-sm font-medium text-gray-700">
            Refresh interval
          </label>
          <select
            id="refreshInterval"
            name="refreshInterval"
            value={settings.refreshInterval}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={15}>15 seconds</option>
            <option value={30}>30 seconds</option>
            <option value={60}>60 seconds</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default WidgetSettings;

