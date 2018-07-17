function electronTask(callbackA)
{
    return gulp.series(myFirstTask, mySeccondTask, (callbackB) =>
    {
        callbackA();
        callbackB();
    })();    
}