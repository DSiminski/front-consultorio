export class Notification {
    ativo!: boolean;
    classe!: string;
    message!: string;

    public new(ativo: boolean, classe: string, message: string): Notification {

        const notification: Notification = new Notification()

        notification.ativo = ativo
        notification.classe = classe
        notification.message = message

        return notification
    }

}