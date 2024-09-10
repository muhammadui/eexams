import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Clock } from "lucide-react";
import React, { useState } from "react";

interface Exam {
  id: number;
  title: string;
  status: "ongoing" | "upcoming" | "completed";
  questions: Question[];
  duration: number;
  instructor: string;
  examType: string;
  date: string;
  closingDate: string;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const mockExams: Exam[] = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    status: "ongoing",
    questions: [
      {
        id: 1,
        text: "What is a variable?",
        options: [
          "A container for data",
          "A type of loop",
          "A function",
          "A class",
        ],
        correctAnswer: 0,
      },
      // Add more questions...
    ],
    duration: 120,
    instructor: "Dr. Jane Doe",
    examType: "Multiple Choice",
    date: "September 15, 2024",
    closingDate: "September 15, 2024, 11:59 PM",
  },
  // Add more exams...
];

interface ExamInfoProps {
  exam: Exam;
  onStartExam: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExamInfo: React.FC<ExamInfoProps> = ({
  exam,
  onStartExam,
  open,
  onOpenChange,
}) => (
  <>
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{exam.title}</DialogTitle>
          <DialogDescription>
            <p>Instructor: {exam.instructor}</p>
            <p>Exam Type: {exam.examType}</p>
            <p>Number of Questions: {exam.questions.length}</p>
            <p>Duration: {exam.duration} minutes</p>
            <p>Date: {exam.date}</p>
            <p>Closing Date: {exam.closingDate}</p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onStartExam}>Start Exam</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </>
);

interface ExamListProps {
  exams: Exam[];
  onExamClick: (exam: Exam) => void;
}

const ExamList: React.FC<ExamListProps> = ({ exams, onExamClick }) => (
  <div className="space-y-4">
    {exams.map((exam) => (
      <Card key={exam.id}>
        <CardContent className="flex items-center justify-between p-4">
          <span>{exam.title}</span>
          <div>
            <Badge
              variant={
                exam.status === "ongoing"
                  ? "default"
                  : exam.status === "upcoming"
                    ? "secondary"
                    : "outline"
              }
            >
              {exam.status}
            </Badge>
            <Button
              variant="outline"
              className="ml-2"
              onClick={() => onExamClick(exam)}
            >
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

interface ExamQuestionProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  isAnswered: boolean;
  selectedAnswer?: number;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({
  question,
  onAnswer,
  isAnswered,
  selectedAnswer,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{question.text}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {question.options.map((option, index) => (
        <Button
          key={index}
          variant={
            isAnswered && selectedAnswer === index ? "secondary" : "outline"
          }
          className="w-full justify-start"
          onClick={() => onAnswer(index)}
        >
          {option}
        </Button>
      ))}
    </CardContent>
  </Card>
);

interface ExamNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const ExamNavigation: React.FC<ExamNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onPrev,
  onNext,
  onSubmit,
}) => (
  <div className="mt-4 flex justify-between">
    <Button onClick={onPrev} disabled={currentQuestion === 0}>
      Previous
    </Button>
    <div className="flex space-x-2">
      {[...Array(totalQuestions)].map((_, index) => (
        <span
          key={index}
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            index === currentQuestion
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          }`}
        >
          {index + 1}
        </span>
      ))}
    </div>
    {currentQuestion === totalQuestions - 1 ? (
      <Button onClick={onSubmit}>Submit</Button>
    ) : (
      <Button onClick={onNext}>Next</Button>
    )}
  </div>
);

interface ExamTimerProps {
  duration: number;
  onTimeUp: () => void;
}

const ExamTimer: React.FC<ExamTimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  React.useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center space-x-2">
      <Clock size={16} />
      <span>{`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</span>
    </div>
  );
};

interface ExamPageProps {
  exam: Exam;
  onSubmit: (answers: Record<number, number>) => void;
}

const ExamPage: React.FC<ExamPageProps> = ({ exam, onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (answerIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{exam.title}</CardTitle>
          <ExamTimer duration={exam.duration} onTimeUp={handleSubmit} />
        </CardHeader>
        <CardContent>
          <ExamQuestion
            question={exam.questions[currentQuestion]}
            onAnswer={handleAnswer}
            isAnswered={answers[currentQuestion] !== undefined}
            selectedAnswer={answers[currentQuestion]}
          />
          <ExamNavigation
            currentQuestion={currentQuestion}
            totalQuestions={exam.questions.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

interface ExamResultProps {
  exam: Exam;
  answers: Record<number, number>;
}

const ExamResult: React.FC<ExamResultProps> = ({ exam, answers }) => {
  const correctAnswers = exam.questions.filter(
    (q, i) => q.correctAnswer === answers[i],
  ).length;
  const score = (correctAnswers / exam.questions.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exam Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Score: {score.toFixed(2)}%</p>
        <p>
          Correct Answers: {correctAnswers} out of {exam.questions.length}
        </p>
        <div className="space-y-4">
          {exam.questions.map((question, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{question.text}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">
                  Correct Answer: {question.options[question.correctAnswer]}
                </p>
                <p
                  className={
                    answers[index] === question.correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  Your Answer: {question.options[answers[index]]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Exam: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [examResults, setExamResults] = useState<Record<number, number> | null>(
    null,
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleExamClick = (exam: Exam) => {
    setSelectedExam(exam);
    setDialogOpen(true);
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setDialogOpen(false);
  };

  const handleSubmitExam = (answers: Record<number, number>) => {
    setExamCompleted(true);
    setExamResults(answers);
  };

  if (examCompleted && selectedExam && examResults) {
    return <ExamResult exam={selectedExam} answers={examResults} />;
  }

  if (examStarted && selectedExam) {
    return <ExamPage exam={selectedExam} onSubmit={handleSubmitExam} />;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Exams</h1>
      <ExamList exams={mockExams} onExamClick={handleExamClick} />
      {selectedExam && (
        <ExamInfo
          exam={selectedExam}
          onStartExam={handleStartExam}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </div>
  );
};

export default Exam;
