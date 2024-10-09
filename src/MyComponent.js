import React from "react";
import { useFeatureIsOn } from "@growthbook/growthbook-react";

function MyComponent() {
  const isProjectAEnabled = useFeatureIsOn("project-a-questions");
  const isProjectBEnabled = useFeatureIsOn("project-b-questions");

  const projectAQuestions = [
    {
      question: "What is the scope of Project A ?",
      options: ["Option A1", "Option A2", "Option A3", "Option A4"]
    },
    {
      question: "What is the timeline for Project A ?",
      options: ["Option B1", "Option B2", "Option B3", "Option B4"]
    },
    {
      question: "How does Project A differ from Project B ?",
      options: ["Option C1", "Option C2", "Option C3", "Option C4"]
    },
    {
      question: "What resources are needed for Project A ?",
      options: ["Option D1", "Option D2", "Option D3", "Option D4"]
    }
  ];

  const projectBQuestions = [
    {
      question: "What is the scope of Project B ?",
      options: ["Option A1", "Option A2", "Option A3", "Option A4"]
    },
    {
      question: "What is the timeline for Project B ?",
      options: ["Option B1", "Option B2", "Option B3", "Option B4"]
    },
    {
      question: "How does Project B differ from Project A ?",
      options: ["Option C1", "Option C2", "Option C3", "Option C4"]
    },
    {
      question: "What resources are needed for Project B ?",
      options: ["Option D1", "Option D2", "Option D3", "Option D4"]
    }
  ];

  return (
    <div>
      {isProjectAEnabled ? (
        <div>
          <h2>Project A is enabled!</h2>
          {projectAQuestions.map((item, index) => (
            <div key={index}>
              <p>{item.question}</p>
              <ul>
                {item.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Project A is not enabled.</p>
      )}

      {isProjectBEnabled ? (
        <div>
          <h2>Project B is enabled!</h2>
          {projectBQuestions.map((item, index) => (
            <div key={index}>
              <p>{item.question}</p>
              <ul>
                {item.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Project B is not enabled.</p>
      )}
    </div>
  );
}

export default MyComponent;