
import React, { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import TextInputField from './components/TextInputField';
import ResultCard from './components/ResultCard';
import ResetButton from './components/ResetButton';
import { useAttendanceCalculator } from './hooks/useAttendanceCalculator';

const BookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>);
const TotalIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h1.5v-1.5h-1.5v1.5z" /></svg>);
const AttendedIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);


const App: React.FC = () => {
  const [totalClasses, setTotalClasses] = useState('');
  const [attendedClasses, setAttendedClasses] = useState('');
  const [subjectName, setSubjectName] = useState('');

  const calculation = useAttendanceCalculator(totalClasses, attendedClasses);

  const handleReset = () => {
    setTotalClasses('');
    setAttendedClasses('');
    setSubjectName('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <Header />

        <main className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <InputField
              id="total-classes"
              label="Total Classes Conducted"
              value={totalClasses}
              onChange={(e) => setTotalClasses(e.target.value)}
              placeholder="e.g., 25"
              icon={<TotalIcon/>}
            />
            <InputField
              id="attended-classes"
              label="Classes Attended"
              value={attendedClasses}
              onChange={(e) => setAttendedClasses(e.target.value)}
              placeholder="e.g., 18"
              icon={<AttendedIcon />}
            />
          </div>

          <div className="mb-8">
            <TextInputField
              id="subject-name"
              label="Subject / Course Name (Optional)"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="e.g., Data Structures"
              icon={<BookIcon />}
            />
          </div>

          <ResultCard 
            data={calculation} 
            subjectName={subjectName}
            totalClasses={totalClasses}
            attendedClasses={attendedClasses}
          />

          <div className="mt-8">
            <ResetButton onClick={handleReset} />
          </div>
        </main>
        
        <footer className="text-center text-sm text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Veltech Attendance Calculator. Built for students.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
