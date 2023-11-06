/**
* In this challenge, you should sort messages by their sentAt property (oldest first) and 
* modify them by adding an "unread" property
* (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
* input. 
*
* @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
* @param messages List of messages, unsorted and without unread property
* @returns Sorted list of messages with the unread information

Dans ce défi, vous devez trier les messages en fonction de leur propriété "sentAt" (les plus anciens en premier) 
et les modifier en ajoutant une propriété "unread" (booléenne signifiant que l'utilisateur actuel n'a pas lu ce message) 
en fonction de l'entrée "lastActivityDatetime".
*/

// ↓ uncomment bellow lines and add your response!

export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {
    
    const lastActivityDate = new Date(lastActivityDatetime);
  
    messages.sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());
  
    const messagesWithUnread: MessageWithUnread[] = messages.map((message) => {
      const messageDate = new Date(message.sentAt);
  
      const isUnread = messageDate > lastActivityDate;
  
      return { ...message, unread: isUnread };
    });
  
    return messagesWithUnread;
  }


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}