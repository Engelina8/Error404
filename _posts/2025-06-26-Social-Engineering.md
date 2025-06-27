---
layout: post
title: "Episode 1: Social Engineering"
episode_number: 1
duration: "28:57"
description: "Social Engineering is a dangerous thing, as you can fall prey to these tactics even if you are aware of them and usually recognise them. There can always come a day where you're particularly tired or unconcentrated and end up falling for one of these traps. Read more about what social engineering is, common tactics and how to defend yourself against it in the following transcript or listen to our podcast episode directly in your browser or on Soundcloud!"
soundcloud_url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2120024622&color=%2316d47b&auto_play=false&hide_related=true&show_comments=true&show_user=false&show_reposts=false&show_teaser=false"
soundcloud_direct_url: "https://soundcloud.com/security-not-found/episode1"
transcripts:
  en: |
    **Engi:** Hello, I'm Engi.

    **Josh:** I'm Josh.

    **Tom:** And I'm Tom.

    **Engi:** And you're listening to '404: Security not found'. Welcome to our very first episode. I'd say we start right away, if everyone's ready.

    **Josh:** Yeah, we are!

    **Engi:** Great, I thought we could start by talking about SQL injections and why they're so danger-

    **Josh:** Wait, wait, wait, wait, wait. That's not how we're doing this.

    **Engi:** No?

    **Josh:** It has to be understandable for everyone.

    **Engi:** Hmm. Well, then, uhm... Maybe we should talk about something that's not directly related to code or computers. Maybe... how about social engineering?

    **Tom:** About what?

    **Josh:** Yeah, I think that would be good.

    **Engi:** Yeah? Okay, then let's talk about social engineering. Tom, you just asked what that is, so let's get right into it. Social engineering consists of techniques used to manipulate people to grant you access to information that you shouldn't really have.

    It's pretty powerful because it plays with human psychology and... yeah, let's find out how attackers can use psychology, deception, and even your trust to get information they shouldn't get, or access to places they shouldn't get to.

    **Josh:** So you're saying that scammers actually study psychology?

    **Engi:** Well, not all of them, but certainly some! If you understand how the human mind works, you can very easily make people do what you want. So let's start with some basic techniques that might be used by these people.

    As I said, it's very psychological, and most of the time you won't even notice it! It's about how people behave, and about using knowledge of how someone will react to deceive them.

    One of the first tactics is exploiting trust. So when you meet someone, you initially assume that the person is honest. You're not going to assume someone is a liar when you meet them for the first time. When you're at work and someone comes in uniform, uses the right way of speaking, and acts like they belong in the company, you're not going to question that. It's probably just the new employee.

    There's also a tendency towards authority. So if a superior, the manager, the CEO, or your own mother tells you something, you'll want to do what they tell you because you've been learning that your whole life. Attackers know this and therefore pretend to be an authority figure to deceive you. So they often pretend to be the boss, the IT department, or even the police.

    They also often use urgency or fear to make you react the way they want. So if someone tells you: "You have to act now or you'll lose a 50 million dollar deal," then you'll feel like you have to act now because, well, if your company loses 50 million dollars or 50 million euros...

    **Josh:** That would be crazy...

    **Engi:** Then it's your fault. So you'll want to act as quickly as possible, and you'll do things without thinking.

    And then there's good old reciprocity, of course. When someone does something for you, does you a favor, or gives you something, you feel like you owe them something back. It's just human nature. Attackers use this by first doing something nice for you, and then asking for a favor in return.

    **Josh:** So basically, they're nice to you first, and then they ask you to do something bad?

    **Engi:** Exactly! They might help you carry something, hold the door open for you, or even just compliment your shirt. Then they ask if they can quickly use your computer or if you can give them the WiFi password.

    Another common technique is pretexting. This is where the attacker creates a fake scenario or identity to extract information. They might call you pretending to be from your bank, from IT support, or even from a survey company.

    **Tom:** Oh, I've gotten calls like that!

    **Engi:** Exactly! They might say something like: "Hi, this is Mike from your IT department. We're having some network issues and need you to confirm your login credentials." And because they sound professional and know a few details about your company, you might actually believe them.

    **Josh:** But how do they know details about the company?

    **Engi:** Great question! A lot of information is actually publicly available. They can look at your company website, LinkedIn profiles, social media posts, even job listings. From all this, they can piece together enough information to sound convincing.

    For example, they might see on LinkedIn that John from IT just started working at your company. So they call and say: "Hi, this is John from IT, I'm new here and I need help accessing the system." You remember seeing the new IT guy announcement, so you help him out.

    **Tom:** That's actually pretty scary.

    **Engi:** It really is! And the thing is, these attacks are getting more sophisticated. Now they use AI to clone voices, create fake videos, and even generate fake documents that look completely real.

    **Josh:** Wait, they can clone voices now?

    **Engi:** Yes! With just a few minutes of someone's voice - maybe from a video call recording or a presentation - they can create AI that sounds exactly like that person. Imagine getting a call from your boss asking you to transfer money, and it actually sounds exactly like your boss!

    **Tom:** So how do we protect ourselves?

    **Engi:** Great question! The first rule is: verify, verify, verify. If someone calls asking for sensitive information, hang up and call them back using a number you know is legitimate. Don't use the number they give you.

    If your boss calls asking you to do something unusual, especially involving money or sensitive data, verify it through a different communication channel. Send them an email, walk to their office, or call them back.

    **Josh:** What about emails? I get suspicious emails all the time.

    **Engi:** Email is probably the most common vector for social engineering attacks. Here are some red flags to watch out for:

    First, urgent language like "Act now!" or "Your account will be closed!" - legitimate companies rarely create artificial urgency like this.

    Second, generic greetings like "Dear Customer" instead of your actual name.

    Third, requests for sensitive information - your bank will never ask for your password via email.

    Fourth, suspicious links or attachments - hover over links to see where they actually go. If the email claims to be from PayPal but the link goes to "paypaI-security.com" (notice the capital i instead of lowercase L), that's suspicious.

    **Tom:** How can I check if a link is safe?

    **Engi:** Good question! There are several tools you can use. One that I like is the NordVPN link checker - you can paste a suspicious link and it will analyze it for you. I'll put the link in our show notes.

    There's also a useful tool for checking what characters are actually being used in text, because sometimes scammers use characters that look like normal letters but are actually different Unicode characters.

    **Josh:** Can you give us a real-world example of how this might happen?

    **Engi:** Sure! Let's say you work at a company. One day you get an email that looks like it's from your CEO. The email says: "Hi, I'm in an urgent meeting with potential investors. I need you to wire 50,000 euros to this account for a confidential business deal. Please do this immediately and don't discuss it with anyone else - confidentiality is crucial."

    Now, this email uses several social engineering techniques: authority (it's from the CEO), urgency (needs to be done immediately), fear (don't want to mess up a big business deal), and secrecy (don't talk to anyone about it).

    **Tom:** I think I might actually fall for that...

    **Engi:** And that's the scary part! These attacks are designed to bypass our logical thinking. When we're stressed, tired, or busy, we're much more likely to fall for them.

    **Josh:** So what should you do in that situation?

    **Engi:** First, take a breath. Any legitimate urgent request can wait 5 minutes for verification. Then, contact the CEO through a different method - walk to their office, call their direct number, or send a separate email asking to confirm.

    A real CEO would never be upset about you double-checking a large financial transaction. In fact, they'd probably be impressed that you're being security-conscious.

    **Tom:** What about physical social engineering? Like someone trying to get into the building?

    **Engi:** Oh yes, that's called "tailgating" or "piggybacking." Someone might dress like a delivery person, maintenance worker, or new employee and try to follow you into a secure area.

    They might say something like: "Oh, I forgot my badge, can you hold the door?" or "My hands are full, could you swipe me in?" It feels rude to say no, but that's exactly what they're counting on.

    **Josh:** How do you handle that without being rude?

    **Engi:** You can say something like: "I'd be happy to help! Let me call security to come assist you with getting a temporary badge." A legitimate person will appreciate your help, while someone with bad intentions will suddenly remember they need to be somewhere else.

    **Tom:** Are there any legal issues with social engineering?

    **Engi:** Absolutely! This is really important to understand. If you're a security professional doing authorized penetration testing - where a company has hired you to test their security - then it's legal.

    But if you're just randomly pretending to be your boss and telling someone "Hey, wire me 10 thousand euros," that's not very legal and you'll probably get into a lot of trouble for that.

    **Josh:** So don't pretend to be your boss.

    **Engi:** Yeah, please, Tom, don't do that.

    **Josh:** Or don't pretend to be anyone.

    **Tom:** I won't, I won't.

    **Engi:** Yeah, just be yourself.

    In the end, even if you're doing things just for a joke, or if it's just a joke to you, it can still have very harmful consequences and you really shouldn't do those things, unless it's like absolutely in a controlled environment where the worst thing that can happen is that someone gets embarrassed. But if there's actual real-life consequences that could come from doing it, maybe think twice before doing it.

    So, yeah, to wrap things up: social engineering doesn't require any hacking knowledge, you don't have to be able to use any advanced tools on your PC. It just requires you as a person to know how other people think. And that's what makes it dangerous. We all could fall for something like that.

    Especially if you're already stressed at work, you haven't been sleeping well and your brain is not functioning as well as it usually does... and then you receive a message from your boss saying to do something, and you do it... well, it happens. And it's too late now. And you've just wired 500 thousand euros to some shady bank account.

    So, yeah, I guess the takeaway is to always be careful and to be honest if something happens, it's better you be honest upfront and say 'hey, something happened, it was an accident' and you solve it with your coworkers than to pretend nothing happened and get into a whole lot more trouble.

    So, that was it for this episode, I hope you learned something and I hope that you've enjoyed it and that you'll stay tuned for our next episode which will be on password security. That's all from our side and feel free to look around our website, contact us if there is anything at all you want to tell us or ask. And... yeah.

    Stay safe, and don't click any weird links!

    **Tom:** Bye, bye!

    **Josh:** Bye-bye!
    de: |
    **Engi:** Hallo, ich bin Engi.

    **Josh:** Ich bin Josh.

    **Tom:** Und ich bin Tom.

    **Engi:** Und ihr hört gerade '404: Security not found'. Willkommen zu unserer allerersten Folge. Ich würde sagen, wir fangen gleich an, wenn alle bereit sind.

    **Josh:** Ja, das sind wir!

    **Engi:** Großartig, ich dachte, wir könnten alles damit beginnen, über SQL-Injections zu sprechen und warum sie so gefährli-

    **Josh:** Warte, warte, warte, warte, warte. So machen wir das nicht.

    **Engi:** Nicht?

    **Josh:** Es muss für jeden verständlich sein.

    **Engi:** Hm. Nun, dann, ähm... Vielleicht sollten wir über etwas sprechen, das nicht direkt mit Code oder Computern zu tun hat. Vielleicht... wie wäre es mit Social Engineering?

    **Tom:** Über was?

    **Josh:** Ja, ich denke, das wäre gut.

    **Engi:** Ja? Okay, dann lasst uns über Social Engineering sprechen. Tom, du hast gerade gefragt, was das ist, also lass uns gleich loslegen. Social Engineering besteht aus Techniken, mit denen Menschen manipuliert werden, damit sie einem Zugang zu Informationen gewähren, die man eigentlich nicht haben sollten.

    Es ist ziemlich wirkungsvoll, weil es mit der menschlichen Psychologie spielt und... ja, lass uns herausfinden, wie Angreifer Psychologie, Täuschung und sogar dein Vertrauen nutzen können, um an Informationen zu gelangen, die sie nicht bekommen sollten, oder an Orte, an die sie nicht gelangen sollten.

    **Josh:** Du meinst also, dass Betrüger tatsächlich Psychologie studieren?

    **Engi:** Nun, nicht alle, aber sicher einige! Wenn du verstehst, wie der menschliche Verstand funktioniert, kannst du Menschen sehr leicht dazu bringen, das zu tun, was du willst. Beginnen wir also mit einigen grundlegenden Techniken, die von diesen Leuten eingesetzt werden könnten.

    Wie ich schon sagte, ist es sehr psychologisch, und die meiste Zeit wirst du es nicht einmal bemerken! Es geht darum, wie sich Menschen verhalten, und darum, das Wissen darüber, wie jemand reagieren wird, zu nutzen, um ihn zu täuschen.

    Eine der ersten Taktiken ist die Ausnutzung von Vertrauen. Wenn du also jemanden kennenlernst, gehst du zunächst davon aus, dass die Person ehrlich ist. Man wird nicht davon ausgehen, dass jemand ein Lügner ist, wenn man ihn zum ersten Mal trifft. Wenn man arbeitet und jemand in Uniform kommt, die richtige Ausdrucksweise benutzt und sich so verhält, als gehöre er in das Unternehmen, dann wird man das nicht in Frage stellen. Es handelt sich wahrscheinlich nur um den neuen Mitarbeiter.

    Es gibt auch eine Tendenz zur Autorität. Wenn einem also ein Vorgesetzter, der Manager, der Geschäftsführer oder die eigene Mutter etwas sagt, wird man das tun wollen, was sie einem sagen, weil man das schon sein ganzes Leben lang gelernt hat. Angreifer wissen das und geben sich deshalb als Autoritätsperson aus, um einen zu täuschen. So geben sie sich oft als den Chef, die IT-Abteilung oder sogar die Polizei aus.

    Außerdem nutzen sie oft Dringlichkeit oder Angst, um einen dazu zu bringen, so zu reagieren, wie sie es wollen. Wenn dir also jemand sagt: "Du musst jetzt handeln, sonst verlierst du ein 50-Millionen-Dollar-Geschäft", dann wirst du das Gefühl haben, dass du jetzt handeln musst, denn, na ja, wenn dein Unternehmen 50 Millionen Dollar oder 50 Millionen Euro verliert...

    **Josh:** Das wäre ja verrückt...

    **Engi:** Dann ist es deine Schuld. Du wirst also so schnell wie möglich handeln wollen, und du wirst Dinge tun, ohne nachzudenken.

    Und dann ist da natürlich noch die gute alte Gegenseitigkeit. Wenn jemand etwas für dich tut, dir einen Gefallen tut oder dir etwas schenkt, wirst du ihm helfen wollen. Also, ich weiß nicht, Josh... kann ich dir ein Stück Schokolade anbieten und im Gegenzug öffnest du diese verschlossene Tür für mich?

    **Josh:** Hmm, auf diesen Trick falle ich nicht rein. Ich werde die Schokolade nicht nehmen.

    **Engi:** Aber vielleicht hättest du das.

    Es gibt noch einen weiteren Trick, der oft angewandt wird, und das ist der soziale Beweis. Also, wenn diese 10 Leute etwas tun, warum tust du es nicht auch, Josh? Tom tut es. Und ich tue es auch. Warum tust du es also nicht? Weil wir so erzogen wurden, haben wir das Gefühl, dass wir das tun müssen, was andere tun, weil das die sichere Wahl ist, und das ist der Punkt, an dem man in eine Falle tappen würde.

    **Josh:** Warte, denkst du, dass dies eine Besonderheit unserer Kultur ist und, dass es in anderen Ländern anders ist?

    **Engi:** Ich denke, sozialer Druck ist etwas, das es im Grunde in jeder Kultur gibt.

    **Josh:** In der Gesellschaft also.

    **Engi:** Ja, da wir soziale Tiere, soziale Wesen sind, sind wir es aufgrund unserer Gruppenmentalität gewohnt, uns anzupassen und das zu tun, was alle anderen auch tun.

    **Josh:** Ja, stimmt.

    **Engi:** Was sind also die eigentlichen Techniken, wie werden sie genannt, woran kann man jemanden erkennen, der tatsächlich Social Engineering durchführt? Das kann in Person oder online geschehen, und ich werde sowohl über Techniken in Person als auch über Online-Techniken sprechen.

    Techniken in Person... nun, vielleicht hast du das schon mal gemacht. Die meisten Menschen haben das schonmal gemacht, ohne es zu merken. Das ist das Tailgating. Tailgating bedeutet im Grunde, dass man jemandem hinterhergeht und er einem die Tür aufhält, weil man direkt hinter ihm steht, obwohl man eigentlich gar nicht reinkommen dürfte, weil man eine Schlüsselkarte oder ähnliches braucht, um sie zu öffnen. Aber gut, du stehst hinter ihnen, und sie denken, du gehörst zum Unternehmen, also halten sie dir die Tür auf. Du gehst hinein. Du hast es geschafft, an einen Ort zu gelangen, an dem du nicht sein solltest.

    **Josh:** So einfach ist es... das ist verrückt.

    **Engi:** Ja. Und es ist viel effektiver, als man denkt. Ich meine, ich habe es getan; ich bin in einen Parkplatz gekommen, nachdem ich mein Ticket verloren hatte, das ich brauchte, um die Tür zu öffnen.

    **Josh:** Hast du dich selbstbewusster als sonst verhalten? Hast du einfach so getan, als wäre alles normal?

    **Engi:** Ja, genau! Du gehst einfach hin, als ob du ein Ticket hättest, steckst deine Hand in die Tasche, als ob du das Ticket holen willst, und die Person vor dir... nun, sie hält die Tür auf. Und du gehst einfach hinein.

    **Josh:** Es war einfach ein netter Mensch und jetzt hat er etwas Schlimmes getan.

    **Engi:** Ganz genau. Er könnte eine Menge Ärger bekommen.

    Dann gibt es noch das Pretexting, auch in Person. Pretexting bedeutet, wie ich bereits erwähnt habe, dass man sich als jemand ausgibt, dem man vertraut, z. B. als Personalverantwortlicher, Mitarbeiter, Freund oder Familienmitglied, um Informationen über einen oder ein Unternehmen zu erhalten oder sogar Zugang zu bestimmten Orten zu bekommen.

    Dann gibt es noch das Baiting. Wie der Name schon sagt, hinterlässt man einen Köder. Sie könnten z. B. ein USB-Laufwerk irgendwo auf einem Parkplatz liegen lassen und etwas wie „vertrauliche Gehälter" darauf schreiben, und jemand wird es wahrscheinlich aufheben und an seinen Computer anschließen. Und schon hat er Schadsoftware installiert.

    **Tom:** Fallen die Menschen im Jahr 2025 noch auf USB-Köder herein?

    **Engi:** Ja, es ist kaum zu glauben, aber es gibt immer noch Leute, die glauben, dass der USB-Stick, den sie gefunden haben, absolut sicher ist, um ihn an ihren PC anzuschließen.

    **Josh:** Wie intelligent...

    **Engi:** Es gibt auch Quizze oder Umfragen, die harmlos erscheinen. Etwas wie... „Wie heißt du nach deinem Geburtstag?" und es gibt Silben für jeden Tag, jedes Jahr, jeden Monat, du schreibst deinen „Namen" in die Kommentare eines zufälligen Instagram-Posts und boom. Du hast einer beliebigen Person dein Geburtsdatum verraten. Oder den Namen deines Haustiers. Oder die Stadt, in der du geboren wurdest. Und das sind oft die Antworten auf Sicherheitsfragen, mit denen man die Anmeldung auf verschiedenen Plattformen umgehen kann.

    **Josh:** Übrigens, wenn ich sage „wie intelligent", dann meine ich nicht, dass Leute, die einfach nur USB-Geräte an ihren Computer anschließen, dumm sind. Es ist nur so, dass... ihr wisst schon...

    **Engi:** Nein, natürlich nicht. Das kann jedem von uns passieren. Vielleicht ist man gestresst, und der USB-Stick schien ganz interessant zu sein. Oder man hat ihn irgendwo gefunden, wo man ihn für sicher hielt, vielleicht in seinem Büro. Aber trotzdem muss man vorsichtig sein, denn jeder USB-Stick kann Malware enthalten. Selbst ein USB-Stick, dem man zu vertrauen scheint und den man schon einmal benutzt hat. Wenn jemand anderes ihn in die Hände bekommt, kann er Malware darauf installieren.

    Nun zu den Online-Möglichkeiten für Social Engineering.

    Sie haben den Begriff wahrscheinlich schon einmal gehört; ich denke, jeder hat ihn schon einmal gehört: Phishing. Es gibt also verschiedene Arten von Phishing, aber fangen wir mit dem normalen Phishing an. Was ist Phishing? Für diejenigen, die noch nie eine dieser seltsamen E-Mails erhalten haben oder nie gemerkt haben, dass sie eine erhalten haben, bedeutet Phishing im Grunde, dass gefälschte E-Mails verschickt werden, die vorgeben, von einer legitimen Quelle zu stammen. Von der Bank oder der Post, die einem mitteilt, dass ein Paket beim Zoll feststeckt und man 10 Euro zahlen muss, um es zu bekommen, oder dass man bitte seine Bankdaten auf dieser Website eingeben soll, die überhaupt nicht verdächtig ist. In diesen E-Mails gibt es ein paar Dinge, auf die man achten kann, aber dazu komme ich gleich noch.

    Es gibt das Vishing, das im Grunde dasselbe ist wie Phishing, nur dass es nicht in Form einer E-Mail, sondern in Form eines Telefonanrufs erfolgt. Man ruft an und gibt vor, vom Kundendienst, von der Polizei oder der Chef zu sein. Auch hier geht es darum, Informationen über das Unternehmen oder die Person zu erhalten, um bösartige Dinge zu tun.

    Es gibt auch Smishing. Auch hier geht es um dasselbe, nur per SMS. Smishing ist genau dasselbe wie Phishing und Vishing, nur dass man eine SMS erhält. Man erhält eine SMS, in der es heißt, dass das Paket verspätet eintrifft oder das Bankkonto gehackt wurde oder so etwas Ähnliches, und man wird gebeten, seine Anmeldedaten einzugeben.

    **Josh:** Vorsicht ist angesagt. Das passiert öfter, als man denkt.

    **Engi:** Ja, darauf bin ich schon einmal hereingefallen!

    Es gibt auch Whaling und Spear-Phishing. Die sind sich ziemlich ähnlich. Beim Whaling geht es um Menschen in hohen Positionen. Das heißt, sie hätten es wahrscheinlich nicht auf mich abgesehen, sondern auf den Geschäftsführer meiner Firma. Sie würden sich eine Menge Informationen über diese Personen beschaffen und versuchen, sie gezielt anzugreifen. Beim Spear-Phishing hingegen geht es nur darum, eine bestimmte Person – nicht unbedingt in einer hohen Position – ins Visier zu nehmen, anstatt eine Massen-E-Mail an hundert Personen zu schicken, die überhaupt nicht personalisiert ist und die man ziemlich leicht von einer echten E-Mail unterscheiden kann. Beim Spear-Phishing recherchiert der Angreifer gezielt über die Person und den Dienst, für den er sich ausgeben will, und schickt eine E-Mail, die auf die Person zugeschnitten ist. In diesem Fall ist es sehr viel schwieriger zu erkennen, dass es sich um eine Phishing-E-Mail handelt.

    Wie versprochen, werden wir nun darüber sprechen, wie man diese Angriffe erkennen und verhindern kann. Erstens: Es wird wahrscheinlich irgendwann passieren. Man wird auf so etwas hereinfallen. Ich werde also ein wenig darüber reden, was man tun kann, um nicht auf diese Betrügereien hereinzufallen...

    **Josh:** Nein, nicht Tom. Ich kenne ihn.

    **Engi:** Nicht Tom.

    **Josh:** Er würde nicht darauf hineinfallen.

    **Engi:** Tom, was sagst du dazu?

    **Tom:** Ich meine... Ich würde nicht darauf reinfallen. Heutzutage nicht. Vielleicht, als ich ein Kind war...

    **Engi:** Denkst du?

    **Tom:** Ich denke nicht.

    **Engi:** Okay...

    **Josh:** Wie?

    **Engi:** Ja, wie?

    **Tom:** Ich meine, ich klicke nie auf irgendwelche komischen Links.

    **Engi:** Sogar wenn die E-Mail von Josh ist?

    **Tom:** Wenn es von Josh kommt, würde ich es wohl erkennen. Weißt du?

    **Engi:** Würdest du?

    **Josh:** Was ist, wenn es jemand anderes ist, der sich wie ich verhält?

    **Engi:** Ja, was ist, wenn ich so tue, als wäre ich Josh? Ich kenne ihn auch ziemlich gut.

    **Tom:** Ich meine... ja... so habe ich noch nie darüber nachgedacht... ja.

    **Josh:** Das kann passieren, ja.

    **Engi:** Also, ich werde auch ein bisschen darüber reden, was man tun kann, wenn etwas passiert. Also, zunächst einmal, worauf sollte man achten?

    Jegliche plötzliche Dringlichkeit. Es ist besser, wenn man die Dinge mit der Person abklärt. Wenn man eine seltsame E-Mail von seinem Chef erhält, in der er einen auffordert, sofort 500.000 Euro auf ein bestimmtes Bankkonto zu überweisen... dann sollte man seinen Chef anrufen. Die Chancen stehen gut, dass er einem sagen wird: 'Bitte tun Sie das nicht'.

    **Josh:** Oder „Bitte rufen Sie mich nicht an".

    **Engi:** Jede Anfrage, die außerhalb der Norm liegt. Stellt euch vor, ihr sprecht nie mit dieser Person aus eurer Firma, aber plötzlich fragt sie nach eurem Geburtstag und eurer Sozialversicherungsnummer. Gebt das vielleicht nicht an. Bei E-Mails sollte man vor allem auf schlechte Grammatik, viele Rechtschreibfehler oder seltsame Links achten. Ein Link, der „Netflix" lauten sollte, ist plötzlich „Netflixx".

    **Tom:** Aber gibt es eine einfache Möglichkeit, einen echten Link von einem gefälschten zu unterscheiden?

    **Engi:** Das ist eine gute Frage. Es gibt sie! Meistens sind gefälschte Links ziemlich offensichtlich. Man kann mit dem Mauszeiger über den Link fahren, um die vollständige Adresse zu sehen, und oft gibt es eine seltsame Adresse. Anstatt von Netflix.com kommt er also von Netflix.com.321. Also nicht vom echten Netflix, sondern von einer Subdomain von etwas namens 321.

    **Josh:** .com.com, vielleicht?

    **Engi:** Ja, .com.com oder .com.org oder so ähnlich. Wenn man am PC ist, kann man meistens mit dem Mauszeiger über den Link fahren, und es wird die vollständige Adresse angezeigt.

    **Josh:** .com.scam, nur um es deutlich zu machen.

    **Engi:** Ja, absolut. Das ist eine todsichere Methode, um das herauszufinden. Es ist etwas schwieriger, aber man kann auch nach ersetzten Symbolen suchen. Anstatt es offensichtlich zu machen, könnten diese Angreifer ein großes O mit einer 0 oder ein großes I mit einem kleinen l vertauschen, was schwieriger zu erkennen ist. Wenn man den Link – ohne darauf zu klicken – in eine dieser Websites kopiert, die einem sagen, welche Zeichen verwendet werden, kann man feststellen, ob es sich tatsächlich um ein O oder eine 0 handelt oder ob es sich um kyrillisches Schriftzeichen handelt. Eine dieser Websites findet man in den unten angegebenen Links.

    **Josh:** Es gibt auch Websites, auf denen man einen Link einfügen kann und die einem dann sagen, ob etwas Seltsames drin ist. Eine davon ist ebenfalls unten verlinkt.

    **Engi:** Das ist absolut richtig.

    Ich habe vorhin gesagt, dass man auf seltsame Links und unerwartete Nachrichten achten soll, sogar von Leuten, die man kennt. Wenn Josh mir eine E-Mail schickt, die sehr seltsam ist und nicht wie er klingt, sollte ich ihn anrufen und fragen: „Hast du mir gerade eine E-Mail geschickt?" Und wenn er sagt: „Nein, habe ich nicht", dann weiß ich, dass jemand versucht hat, mich zu betrügen.

    **Josh:** Genau, das ist sehr wichtig.

    **Engi:** Also, zu allem, was wir bisher besprochen haben, ist die wichtigste Regel: Immer verifizieren! Wenn etwas seltsam erscheint, überprüft es über einen anderen Kommunikationskanal.

    In diesem Zusammenhang ist es auch wichtig zu erwähnen, dass es legal ist, wenn man ein Sicherheitsexperte ist und von einem Unternehmen beauftragt wurde, dessen Sicherheit zu testen. Wenn das Unternehmen also sagt: „Geh rein, tu so, als würdest du eine E-Mail schreiben, du bist ich, du schreibst das und das", ist das legal. Aber wenn man einfach zufällig so tut, als wäre man sein Chef und jemandem sagt: „Hey, überweise mir 10.000 Euro", ist das nicht sehr legal und man wird wahrscheinlich eine Menge Ärger dafür bekommen.

    **Josh:** Also tu nicht so, als wärst du dein Chef.

    **Engi:** Ja, bitte, Tom, tu das nicht.

    **Josh:** Oder tu nicht so, als wärst du irgendjemand anderes.

    **Tom:** Das werde ich nicht, das werde ich nicht.

    **Engi:** Ja, sei einfach du selbst.

    Letztendlich, auch wenn man Dinge nur aus Spaß macht, oder wenn es nur ein Scherz für einen ist, kann es trotzdem sehr schädliche Konsequenzen haben und man sollte diese Dinge wirklich nicht tun, es sei denn, es ist absolut in einer kontrollierten Umgebung, wo das Schlimmste, was passieren kann, ist, dass sich jemand schämt. Aber wenn es tatsächliche Konsequenzen im echten Leben geben könnte, sollte man vielleicht zweimal darüber nachdenken, bevor man es tut.

    Also, ja, um es zusammenzufassen: Social Engineering erfordert kein Hacking-Wissen, man muss keine fortgeschrittenen Tools auf dem PC verwenden können. Es erfordert nur, dass man als Person weiß, wie andere Menschen denken. Und das macht es gefährlich. Wir alle könnten auf so etwas hereinfallen. Besonders wenn man bereits gestresst bei der Arbeit ist, nicht gut geschlafen hat und das Gehirn nicht so gut funktioniert wie normalerweise... und dann erhält man eine Nachricht vom Chef, die besagt, etwas zu tun, und man tut es... nun, es passiert. Und es ist jetzt zu spät. Und man hat gerade 500.000 Euro auf ein zwielichtiges Bankkonto überwiesen.

    Also, ja, die wichtigste Erkenntnis ist, immer vorsichtig zu sein und ehrlich zu sein, wenn etwas passiert. Es ist besser, ehrlich im Vorfeld zu sein und zu sagen: „Hey, etwas ist passiert, es war ein Versehen" und es mit den Kollegen zu lösen, als so zu tun, als wäre nichts passiert und in viel mehr Schwierigkeiten zu geraten.

    Das war es also für diese Episode. Ich hoffe, ihr habt etwas gelernt und ich hoffe, dass es euch gefallen hat und dass ihr bei unserer nächsten Episode dabei bleibt, die sich mit Passwort-Sicherheit beschäftigen wird. Das ist alles von unserer Seite und schaut gerne auf unserer Website vorbei, kontaktiert uns, wenn es irgendetwas gibt, was ihr uns erzählen oder fragen möchtet. Und... ja.

    Bleibt sicher und klickt nicht auf seltsame Links!

    **Tom:** Tschüss!

    **Josh:** Tschüss!
   fr: |
    **Engi:** Bonjour, je suis Engi.

    **Josh:** Je suis Josh.

    **Tom:** Et je suis Tom.

    **Engi:** Et vous écoutez '404: Security not found'. Bienvenue dans notre tout premier épisode. Je dirais qu'on commence tout de suite, si tout le monde est prêt.

    **Josh:** Oui, nous le sommes !

    **Engi:** Parfait, je pensais qu'on pourrait commencer par parler des injections SQL et pourquoi elles sont si danger-

    **Josh:** Attends, attends, attends, attends, attends. Ce n'est pas comme ça qu'on fait.

    **Engi:** Non ?

    **Josh:** Il faut que ce soit compréhensible pour tout le monde.

    **Engi:** Hmm. Eh bien, alors, euh... Peut-être qu'on devrait parler de quelque chose qui n'est pas directement lié au code ou aux ordinateurs. Peut-être... que diriez-vous de l'ingénierie sociale ?

    **Tom:** De quoi ?

    **Josh:** Oui, je pense que ce serait bien.

    **Engi:** Oui ? D'accord, alors parlons d'ingénierie sociale. Tom, tu viens de demander ce que c'est, alors commençons tout de suite. L'ingénierie sociale consiste en des techniques utilisées pour manipuler les gens afin qu'ils t'accordent l'accès à des informations que tu ne devrais pas vraiment avoir.

    C'est assez puissant parce que ça joue avec la psychologie humaine et... oui, découvrons comment les attaquants peuvent utiliser la psychologie, la tromperie et même ta confiance pour obtenir des informations qu'ils ne devraient pas obtenir, ou accéder à des endroits où ils ne devraient pas aller.

    **Josh:** Donc tu dis que les escrocs étudient vraiment la psychologie ?

    **Engi:** Eh bien, pas tous, mais certainement certains ! Si tu comprends comment l'esprit humain fonctionne, tu peux très facilement faire faire aux gens ce que tu veux. Alors commençons par quelques techniques de base qui pourraient être utilisées par ces gens.

    Comme je l'ai dit, c'est très psychologique, et la plupart du temps tu ne le remarqueras même pas ! Il s'agit de la façon dont les gens se comportent, et d'utiliser la connaissance de la façon dont quelqu'un va réagir pour le tromper.

    Une des premières tactiques est d'exploiter la confiance. Donc quand tu rencontres quelqu'un, tu supposes initialement que la personne est honnête. Tu ne vas pas supposer que quelqu'un est un menteur quand tu le rencontres pour la première fois. Quand tu es au travail et que quelqu'un vient en uniforme, utilise la bonne façon de parler, et agit comme s'il appartenait à l'entreprise, alors tu ne vas pas remettre ça en question. C'est probablement juste le nouvel employé.

    Il y a aussi une tendance vers l'autorité. Donc si un supérieur, le manager, le PDG, ou ta propre mère te dit quelque chose, tu vas vouloir faire ce qu'ils te disent parce que tu as appris ça toute ta vie. Les attaquants le savent et se font donc passer pour une figure d'autorité pour te tromper. Ils se font souvent passer pour le patron, le département IT, ou même la police.

    Ils utilisent aussi souvent l'urgence ou la peur pour te faire réagir comme ils le veulent. Donc si quelqu'un te dit : "Tu dois agir maintenant ou tu vas perdre une affaire de 50 millions de dollars", alors tu vas avoir l'impression que tu dois agir maintenant parce que, eh bien, si ton entreprise perd 50 millions de dollars ou 50 millions d'euros...

    **Josh:** Ce serait fou...

    **Engi:** Alors c'est ta faute. Tu vas donc vouloir agir aussi vite que possible, et tu vas faire des choses sans réfléchir.

    Et puis il y a la bonne vieille réciprocité. Si quelqu'un fait quelque chose pour toi, te rend service ou te donne quelque chose, tu vas vouloir l'aider en retour. Donc, je ne sais pas, Josh... puis-je t'offrir un morceau de chocolat et en échange tu ouvres cette porte verrouillée pour moi ?

    **Josh:** Hmm, je ne tombe pas dans ce piège. Je ne prendrai pas le chocolat.

    **Engi:** Mais peut-être que tu l'aurais fait.

    Il y a une autre astuce qui est souvent utilisée, et c'est la preuve sociale. Donc, si ces 10 personnes font quelque chose, pourquoi ne le fais-tu pas aussi, Josh ? Tom le fait. Et je le fais aussi. Alors pourquoi ne le fais-tu pas ? Parce que nous avons été élevés comme ça, nous avons l'impression que nous devons faire ce que d'autres gens font parce que c'est le choix sûr, et c'est là que tu tomberas dans un piège.

    **Josh:** Attends, penses-tu que c'est une spécificité de notre culture et que c'est différent dans d'autres pays ?

    **Engi:** Je pense que la pression sociale est quelque chose qui existe essentiellement dans toutes les cultures.

    **Josh:** Dans la société donc.

    **Engi:** Oui, puisque nous sommes des animaux sociaux, des êtres sociaux, nous sommes habitués, à cause de notre mentalité de groupe, à nous conformer et à faire ce que tous les autres font aussi.

    **Josh:** Oui, c'est vrai.

    **Engi:** Alors quelles sont les techniques réelles, comment s'appellent-elles, comment peut-on reconnaître quelqu'un qui fait réellement de l'ingénierie sociale ? Cela peut se passer en personne ou en ligne, et je vais parler des deux techniques en personne et des techniques en ligne.

    Les techniques en personne... eh bien, tu as peut-être déjà fait ça. La plupart des gens l'ont fait sans s'en rendre compte. C'est le tailgating. Le tailgating signifie essentiellement que tu suis quelqu'un et qu'il te tient la porte parce que tu es juste derrière lui, même si tu n'es pas vraiment supposé entrer parce que tu as besoin d'une carte-clé ou quelque chose comme ça pour l'ouvrir. Mais bon, tu es derrière eux, et ils pensent que tu appartiens à l'entreprise, alors ils te tiennent la porte. Tu entres. Tu as réussi à aller dans un endroit où tu n'étais pas supposé être.

    **Josh:** C'est si simple... c'est fou.

    **Engi:** Oui. Et c'est bien plus efficace qu'on ne le pense. Je veux dire, je l'ai fait ; je suis entré dans un parking après avoir perdu mon ticket que j'avais besoin pour ouvrir la porte.

    **Josh:** As-tu agi plus confiant que d'habitude ? As-tu juste fait comme si tout était normal ?

    **Engi:** Oui, exactement ! Tu y vas juste comme si tu avais un ticket, tu mets ta main dans ta poche comme si tu voulais sortir le ticket, et la personne devant toi... eh bien, elle tient la porte ouverte. Et tu entres juste.

    **Josh:** C'était juste une personne gentille et maintenant elle a fait quelque chose de mal.

    **Engi:** Exactement. Elle pourrait avoir beaucoup d'ennuis.

    Ensuite il y a le pretexting, aussi en personne. Le pretexting signifie, comme je l'ai déjà mentionné, se faire passer pour quelqu'un en qui on fait confiance, comme un responsable des ressources humaines, un employé, un ami ou un membre de la famille, pour obtenir des informations sur toi ou une entreprise ou même obtenir l'accès à certains endroits.

    Ensuite il y a le baiting. Comme le nom l'indique, tu laisses un appât. Ils pourraient par exemple laisser une clé USB quelque part dans un parking et écrire quelque chose comme "salaires confidentiels" dessus, et quelqu'un va probablement la ramasser et la brancher à son ordinateur. Et juste comme ça, il a installé des logiciels malveillants.

    **Tom:** Les gens tombent-ils encore dans le piège des appâts USB en 2025 ?

    **Engi:** Oui, c'est difficile à croire, mais il y a encore des gens qui pensent que la clé USB qu'ils ont trouvée est absolument sûre à brancher à leur PC.

    **Josh:** Comme c'est intelligent...

    **Engi:** Il y a aussi des quiz ou des sondages qui semblent inoffensifs. Quelque chose comme... "Quel est ton nom basé sur ton anniversaire ?" et il y a des syllabes pour chaque jour, chaque année, chaque mois, tu écris ton "nom" dans les commentaires d'un post Instagram aléatoire et boom. Tu as révélé ta date de naissance à n'importe quelle personne. Ou le nom de ton animal de compagnie. Ou la ville où tu es né. Et ce sont souvent les réponses aux questions de sécurité avec lesquelles on peut contourner la connexion sur différentes plateformes.

    **Josh:** Au fait, quand je dis "comme c'est intelligent", je ne veux pas dire que les gens qui branchent juste des appareils USB à leur ordinateur sont stupides. C'est juste que... vous savez...

    **Engi:** Non, bien sûr que non. Ça peut arriver à n'importe lequel d'entre nous. Peut-être qu'on est stressé, et la clé USB semblait assez intéressante. Ou on l'a trouvée quelque part où on pensait qu'elle était sûre, peut-être dans son bureau. Mais quand même, il faut faire attention parce que n'importe quelle clé USB peut contenir des logiciels malveillants. Même une clé USB à laquelle on semble faire confiance et qu'on a utilisée auparavant. Si quelqu'un d'autre met la main dessus, il peut y installer des logiciels malveillants.

    Maintenant, les moyens en ligne pour l'ingénierie sociale.

    Vous avez probablement déjà entendu le terme ; je pense que tout le monde l'a entendu : le phishing. Il y a donc différents types de phishing, mais commençons par le phishing normal. Qu'est-ce que le phishing ? Pour ceux qui n'ont jamais reçu un de ces emails étranges ou qui n'ont jamais réalisé qu'ils en avaient reçu un, le phishing signifie essentiellement envoyer de faux emails prétendant venir d'une source légitime. De la banque ou de la poste, vous disant qu'un colis est bloqué à la douane et que vous devez payer 10 euros pour l'obtenir, ou que vous devez s'il vous plaît entrer vos détails bancaires sur ce site web qui n'est pas du tout suspect. Dans ces emails, il y a quelques choses auxquelles vous pouvez faire attention, mais j'y reviendrai dans un moment.

    Il y a le vishing, qui est essentiellement la même chose que le phishing, sauf que ce n'est pas sous forme d'email, mais sous forme d'appel téléphonique. Ils appellent et prétendent être du service client, de la police ou le patron. Encore une fois, c'est pour obtenir des informations sur l'entreprise ou la personne pour faire des choses malveillantes.

    Il y a aussi le smishing. Encore une fois, c'est la même chose, juste par SMS. Le smishing est exactement la même chose que le phishing et le vishing, juste que vous recevez un SMS. Vous recevez un SMS disant que le colis arrive en retard ou que le compte bancaire a été hacké ou quelque chose comme ça, et on vous demande d'entrer vos identifiants de connexion.

    **Josh:** Il faut faire attention. Ça arrive plus souvent qu'on ne le pense.

    **Engi:** Oui, je suis déjà tombé dans le panneau !

    Il y a aussi le whaling et le spear phishing. Ils sont assez similaires. Le whaling concerne les personnes en position élevée. Donc ils n'auraient probablement pas ciblé moi, mais le PDG de mon entreprise. Ils se procureraient beaucoup d'informations sur cette personne et tenteraient de l'attaquer de manière ciblée. En revanche, le spear phishing consiste uniquement à cibler une personne spécifique (pas nécessairement haut placée), plutôt que d'envoyer un email à une centaine de personnes, qui n'est pas du tout personnalisé et qui est assez facile à distinguer d'un véritable email. Dans le cas du spear phishing, l'attaquant fait des recherches ciblées sur la personne et le service pour lequel il veut se faire passer, et envoie un email personnalisé à cette personne. Dans ce cas, il est beaucoup plus difficile de reconnaître qu'il s'agit d'un email d'hameçonnage.

    Comme promis, nous allons maintenant parler de la manière de reconnaître et de prévenir ces attaques. Tout d'abord, cela finira probablement par arriver. On va se faire avoir par ce genre de choses. Je vais donc parler un peu de ce qu'on peut faire pour ne pas se faire avoir par ces arnaques...

    **Josh:** Non, pas Tom. Je le connais.

    **Engi:** Pas Tom.

    **Josh:** Il ne se ferait pas avoir.

    **Engi:** Tom, qu'en dis-tu ?

    **Tom:** Je veux dire... Je ne me ferais pas avoir. Pas aujourd'hui, en tout cas. Peut-être quand j'étais enfant...

    **Engi:** Tu crois ?

    **Tom:** Je ne pense pas.

    **Engi:** D'accord...

    **Josh:** Comment ?

    **Engi:** Oui, comment ?

    **Tom:** Je veux dire, je ne clique jamais sur des liens bizarres.

    **Engi:** Même si l'email vient de Josh ?

    **Tom:** S'il venait de Josh, je pense que je le reconnaîtrais. Tu sais ?

    **Engi:** Le ferais-tu ?

    **Josh:** Et si c'était quelqu'un d'autre qui se comportait comme moi ?

    **Engi:** Oui, et si je faisais semblant d'être Josh ? Je le connais assez bien aussi.

    **Tom:** Je veux dire... oui... je n'y ai jamais pensé de cette façon... oui.

    **Josh:** Ça peut arriver, oui.

    **Engi:** Alors, je vais aussi parler un peu de ce qu'on peut faire quand quelque chose arrive. Donc, tout d'abord, à quoi faut-il faire attention ?

    Toute urgence soudaine. Il est préférable de clarifier les choses avec la personne. Si vous recevez un email étrange de votre patron vous demandant de transférer immédiatement 500 000 euros sur un compte bancaire spécifique... vous devriez appeler votre patron. Il y a de fortes chances qu'il vous dise : "S'il vous plaît, ne faites pas ça".

    **Josh:** Ou "Ne m'appelez pas, s'il vous plaît".

    **Engi:** Toute demande qui sort de la norme. Imaginez que vous ne parlez jamais à cette personne de votre entreprise, mais qu'elle vous demande soudain votre date de naissance et votre numéro de sécurité sociale. C'est peut-être mieux de ne pas les donner. En ce qui concerne les emails, il faut surtout faire attention à la mauvaise grammaire, aux nombreuses fautes d'orthographe ou aux liens étranges. Un lien qui devrait être "Netflix" devient soudain "Netflixx".

    **Tom:** Mais existe-t-il un moyen simple de distinguer un lien authentique d'un lien falsifié ?

    **Engi:** C'est une bonne question. Il y en a un ! La plupart du temps, les liens falsifiés sont assez évidents. On peut passer le curseur de la souris sur le lien pour voir l'adresse complète, et souvent il y a une adresse bizarre. Ainsi, au lieu de venir de Netflix.com, il vient de Netflix.com.321. Donc pas du vrai Netflix, mais d'un sous-domaine de quelque chose appelé 321.

    **Josh:** .com.com, par exemple ?

    **Engi:** Oui, .com.com ou .com.org ou quelque chose comme ça. Quand on est sur son PC, on peut généralement passer le curseur de la souris sur le lien et l'adresse complète s'affiche.

    **Josh:** .com.scam, juste pour être clair.

    **Engi:** Oui, absolument. C'est une méthode infaillible pour le découvrir. C'est un peu plus difficile, mais on peut aussi chercher des symboles remplacés. Au lieu de le rendre évident, ces attaquants pourraient échanger un grand O avec un 0 ou un grand I avec un petit l, ce qui est plus difficile à détecter. Si vous copiez le lien - sans cliquer dessus - sur l'un de ces sites qui vous disent quels caractères sont utilisés, vous pouvez déterminer s'il s'agit effectivement d'un O ou d'un 0, ou s'il s'agit de caractères cyrilliques. Un de ces sites se trouve dans les liens ci-dessous.

    **Josh:** Il existe également des sites web sur lesquels on peut insérer un lien et qui nous disent alors s'il y a quelque chose d'étrange dedans. Un d'eux est également lié ci-dessous.

    **Engi:** C'est tout à fait ça.

    J'ai dit tout à l'heure qu'il fallait faire attention aux liens étranges et aux messages inattendus, même de la part de personnes que l'on connaît. Si Josh m'envoie un email qui est très étrange et qui ne lui ressemble pas, je devrais l'appeler et lui demander : "Viens-tu de m'envoyer un email ?" Et s'il dit : "Non, je ne l'ai pas fait", alors je sais que quelqu'un a essayé de m'arnaquer.

    **Josh:** Exactement, c'est très important.

    **Engi:** Donc, pour tout ce dont nous avons discuté jusqu'à présent, la règle la plus importante est : toujours vérifier ! Si quelque chose semble étrange, vérifiez-le via un autre canal de communication.

    Dans ce contexte, il est aussi important de mentionner que c'est légal si vous êtes un expert en sécurité et qu'une entreprise vous a demandé de tester leur sécurité. Donc si l'entreprise dit : "Vas-y, fais comme si tu allais écrire un email, tu vas être moi, tu vas écrire ceci et cela", c'est légal. Mais si vous faites juste semblant d'être votre patron au hasard et que vous dites à quelqu'un : "Hé, envoyez-moi 10 000 euros", ce n'est pas très légal et vous aurez probablement beaucoup d'ennuis pour ça.

    **Josh:** Alors ne prétendez pas être votre patron.

    **Engi:** Oui, s'il vous plaît, Tom, ne faites pas ça.

    **Josh:** Ou ne prétendez pas être quelqu'un d'autre.

    **Tom:** Je ne le ferai pas, je ne le ferai pas.

    **Engi:** Oui, soyez juste vous-même.

    Au final, même si vous faites des choses juste pour rigoler, ou si c'est juste une blague pour vous, ça peut quand même avoir des conséquences très néfastes et vous ne devriez vraiment pas faire ce genre de choses, à moins que ce soit absolument dans un environnement contrôlé où le pire qui puisse arriver est que quelqu'un soit embarrassé. Mais s'il pourrait y avoir des conséquences réelles dans la vraie vie, il vaudrait peut-être mieux y réfléchir à deux fois avant de le faire.

    Donc, oui, pour résumer : l'ingénierie sociale ne nécessite aucune connaissance en piratage, vous n'avez pas besoin de pouvoir utiliser des outils avancés sur votre PC. Il faut juste que vous, en tant que personne, sachiez comment les autres pensent. Et c'est ce qui la rend dangereuse. Nous pourrions tous tomber dans quelque chose comme ça. Surtout si vous êtes déjà stressé au travail, que vous n'avez pas bien dormi et que votre cerveau ne fonctionne pas aussi bien qu'il le fait habituellement... et puis vous recevez un message de votre patron disant de faire quelque chose, et vous le faites... eh bien, ça arrive. Et c'est trop tard maintenant. Et vous venez juste de virer 500 000 euros vers un compte bancaire douteux.

    Donc, oui, je suppose que la leçon à retenir est d'être toujours prudent et d'être honnête si quelque chose arrive. Il vaut mieux être honnête dès le départ et dire "hé, quelque chose s'est passé, c'était un accident" et le résoudre avec vos collègues plutôt que de prétendre que rien ne s'est passé et d'avoir encore plus d'ennuis.

    Donc, c'était tout pour cet épisode, j'espère que vous avez appris quelque chose et j'espère que vous l'avez apprécié et que vous resterez à l'écoute pour notre prochain épisode qui portera sur la sécurité des mots de passe. C'est tout de notre côté et n'hésitez pas à regarder autour de notre site web, contactez-nous s'il y a quoi que ce soit que vous voulez nous dire ou demander. Et... oui.

    Restez en sécurité, et ne cliquez pas sur des liens bizarres !

    **Tom:** Au revoir, au revoir !

    **Josh:** Au revoir !

default_transcript_language: en
---

# Welcome to Episode 1

## Resources

View what characters are being used in a sentence: https://www.soscisurvey.de/tools/view-chars.php

Link checker:
https://nordvpn.com/link-checker/
