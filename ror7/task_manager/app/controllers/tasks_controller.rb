class TasksController < ApplicationController
  def index
    @tasks = %w[Task1, Task2, Task3]
  end

  def new
  end

  def edit
  end
end
