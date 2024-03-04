export const Event = {
    name: "errorManager",
    customEvent: true,
    run: () => {
        process.on('unhandledRejection', (error) => {
            console.log(error);
        });
        process.on('uncaughtException', (error) => {
            console.log(error);
        });
    }
};