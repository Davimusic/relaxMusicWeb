"use client";




function Home() {
  const { tasks } = useTasks();

  return (
    <div className="flex justify-center">
      {tasks.length === 0 ? (
        <div className="block">
          <h2 className="text-2xl">There are no tasks</h2>
          <VscTasklist size="8rem" />
        </div>
      ) : (
        <div className="w-7/10">
          {tasks.map((task, i) => (
            <TaskCard task={task} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
