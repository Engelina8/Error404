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
  
    Engi: 
      Hi everyone, I'm Engi
      
    Josh: 
      I'm Josh
      
    Tom:  
      I'm Tom
      
    Engi: 
      And this is 404: Security not found. Welcome to our very first official episode. So, I'd say we get right into it, if everyone's ready.
    Josh: 
      Yes, we are!
    Engi: 
      Great, so I was thinking we could start off everything by talking about SQL injections and why they are so dangerou-
    Josh: 
      Wait, wait, wait wait, wait. This is not how we do it.
    Engi: 
      No?
    Josh: 
      It has to be understandable for everybody.
    Engi: 
      Hm. Well, then, uhm... Perhaps we should talk about something that's not directly related to code or computers. Maybe... how about social engineering?
    Tom: 
      About what?
    Josh: 
      Yeah, I think that's cool.
    Engi: 
      Yeah? Okay, let's talk about social engineering then. Tom, you just asked what it was, so let's get right into it. So, social engineering consists of techniques used to manipulate people into giving you access or information that you really shouldn't have. 
      It's quite powerful, actually, because it plays on the human psychology and... yeah, let's find out how attackers might use psychology, deception and even your trust to get information they shouldn't get or access to places they shouldn't get. 
    Josh: 
      Ok, so you mean that scammers are actually studying psychology?
    Engi: 
      Well, not all of them, but I'm sure some are! If you understand how the human mind works, you can very easily trick people into doing what you want. So, let's start with some basic techniques that might be used by these people.
      Like I said, it's very psychological, most of the time you won't even notice it! It's about how people behave and using the knowledge of how someone will react to deceive them.
      One of the first tactis is exploiting trust. So, at base, when you're meeting someone, you assume that the person is honest. You're not going to assume that someone is a liar the first time you meet them. If you're working and someone wearing a uniform comes in, uses the right language and acts like they belong in your company, well, you're not going to question it. It's probably just the new hire.
      There's also authority bias. So, when you're told something by a higher-up, by your manager, by a CEO, by your mother, you're going to want to do what they're telling you to do, because you've been taught to do it all your life. Attackers know that, so they're going to pretend to be some figure of authority in order to deceive you. So oftentimes they'll impersonate your boss, the IT department or even the police.
      Furthermore, they often use urgency or fear to get you to react the way they want to. So, if someone tells you: 'you have to act now or you're going to lose a 50 million dollar deal', you're going to feel like you have to act now, because, well, if your company loses 50 million dollars, or 50 million euros,
    Josh:
      That's crazy...
    Engi:
      Then it's your fault. So, you're going to want to just act as quickly as possible, and you're going to do things without thinking. 
      And of course, there's the good old reciprocity. If someone does something for you, a favour, or gives you something, you're going to want to help them out. So, I don't know, Josh... can I give you a piece of chocolate and in exchange you'll open that door for me?
    Josh:
      Hmm, I'm not falling for this trick. I won't take the chocolate.
    Engi:
      But you might have.
      There is one more trick that is often used, and that's social proof. So, if these 10 people are doing something, why aren't you doing it too, Josh? Tom is doing it. And I'm doing it. So why aren't you? So, because of how we are raised, we feel like we have to do what other are doing, because that's the safe choice and that's where you'd fall into a trap.
    Josh:
      Wait, so do you think that this is specific to our culture, like it's different in other countries?
    Engi:
      I think social pressure is something that exists in basically every culture.
    Josh:
      Like society.
    Engi:
      Yeah, since we are social animals, social beings, we are used to fitting in and doing what everyone else is doing because of our group mentality.
    Josh:
      Yeah, true.
    Engi:
      So, what are actual techniques, what are they called, what can you spot someone doing when they're actually doing some social engineering? It can happen in person or online, and I will talk about both in-person as well as online techniques.
      For in-person techniques... well, you've probably done this. Most people have actually done this without noticing. Which is tailgating. Tailgating is basically just walking behind someone and they hold the door open for you, because you're right behind them, when technically, you shouldn't be able to get in, you need a keycard (or similar) to open it. But well, you're behind them, and they think you're a part of the company, so they hold the door for you. You go in. Successfully made your way into a place you shouldn't be in.
    Josh:
      It's that easy... that's crazy.
    Engi:
      Yes. And it's actually way more effective than you think. I mean I've done it; I've gotten into a parking lot after losing my ticket (which I needed to open the door). It's happened.
    Josh:
      Did you act more confident then usual? You just pretended like everything was normal?
    Engi: 
      Yeah, absolutely! You just like walk up as if you have a ticket, you put your hand in your pocket (as though to get the ticket) and the person in front of you, they... well, they hold the door open. And you go straight in.
    Josh:
      It was just a nice person and now he's done something bad.
    Engi:
      Exactly. He could get in a lot of trouble. So, yeah...
      Then, also in person, you have pretexting. Pretexting is, as I've mentioned before, pretending to be someone you trust, HR, a coworker, a friend, a family member, even, in order to get info about you, your company or even access to places.
      There's also baiting. Baiting is, well, as the name suggests you're leaving bait. For instance, you could leave a USB drive somewhere in a parking lot and write something like 'confidential salaries' on it, and someone will probably pick it up and plug it into their computer. And, well, then they have malware installed.
    Tom: 
      Do people still fall for USB baiting in 2025?
    Engi:
      Yeah, it's hard to believe, but people do still think that that USB they found is absolutely safe to plug into their PC.
    Josh:
      How clever...
    Engi:
      There's also quizzes or surveys which seem harmless. Something like... 'What's your name according to your birthday?' and there's syllables for every day, every year, every month, you put your 'name' into the comments of some random Instagram post and boom. You've given a random person your birth date. Or your pet's name. Or the city you were born in. And those are oftentimes the answers to security questions that you can use to bypass login on different platforms.
    Josh: 
      And by the way, when I say 'how clever' I don't mean that people who just plug USBs into their computers are stupid. It's just that... you know...
    Engi:
      Of course not. It can happen to any of us. Maybe you're stressed, and, well, that USB stick did seem quite interesting. Or maybe you found it somewhere you thought was safe, perhaps inside your office. But it's still something you have to be careful of because every USB stick can carry malware. Even a USB stick that you think you're able to trust, one that you've used before. If someone else gets their hands on it, they can install malware on it.
      Ok, then let's go into the online ways to use social engineering.
      You've probably heard the term; I think everyone's heard it by now: Phishing. So, there's different kinds of phishing, but let's start with the normal one. What's phishing? Phishing, for those who've never received one of those strange e-mails or never realised that they've received one, is basically sending fake e-mails pretending to be from some legit source. From your bank or from the post office, telling you that there's a package stuck in customs and that you have to pay 10 euros to get it, and please put your banking information into this website that is not at all suspicious. In those e-mails, there's a few things that you can watch out for, but I'll get into that in just a little bit.
      You have vishing, which is basically the same as phishing, but instead of being in e-mail form, it's, well, a phone call. People call you and they pretend to be from customer support, or the police, or your boss. Again, what they want is to get information about your company or you in order to do malicious stuff.
      You also have smishing. Again, same thing, just via SMS. Smishing is exactly the same as phishing and vishing, just that you receive an SMS. You receive an SMS saying your package is delayed, or that your bank account has been hacked, or something like that, and to please put in your credentials and there's a link, and if you click on that link, you're going to get on a website that's probably not very secure and from there on, a lot of things can happen.
    Josh:
      Be careful. This happens more often than we think.
    Engi:
      Yeah, I've fallen for this before!
      There's also whaling and spear phishing. They're quite similar. Whaling is going after people in high positions. Meaning they would probably not go after me but they'd go after the CEO of my firm. They would get a lot of information about them and try and go after that person specifically. Whereas spear phishing is just about targeting one person specifically (not necessarily in a high position) instead of sending a mass e-mail to a hundred people that is not at all personalised and that you can pretty easily tell apart from a legit e-mail. Spear phishing would have the attacker do specific research on you as a person and on whatever service it is they want to pretend to be and send you and e-mail that is targeted to you. In that case, it'll be a lot more difficult to tell that it's a phishing e-mail.
      Now, as I promised, we're going to talk about how to detect and prevent these attacks. Firstly, it's probably going to happen at some point. You're going to fall for something like this. So, I'm going to tell you a bit about things to do to not fall for these scams...
    Josh:
      Nah, not Tom. I know him. 
    Engi:
      Not Tom.
    Josh:
      He won't fall for this.
    Engi:
      Tom, what do you have to say for yourself?
    Tom:
      I mean... I can't. Today I can't. Maybe when I was a kid... 
    Engi:
      You think you can't?
    Tom:
      I think I can't.
    Engi:
      Okay...
    Josh:
      How?
    Engi:
      Yeah, how? 
    Tom:
      I mean I never click on any links from things like this.
    Engi:
      Even if the e-mail is from Josh?
    Tom:
      I mean, if it's from Josh, I'll know it. You know?
    Engi:
      But will you?
    Josh:
      What if it's someone else acting like me?
    Engi:
      Yeah, what if it's me pretending to be Josh? I know him pretty well as well.
    Tom:
      I mean... yeah... I never thought about it like that... yeah.
    Josh:
      This can happen, actually, yeah.
    Engi:
      So, I'm going to also tell you a bit about what you can do if something does happen. So, first off, what should you watch out for?
      Any sudden urgency. It's better that you double check things with the person. If you receive a weird email from your boss telling you to wire 500 thousand euros right now to this bank account... well, give your boss a call. Chances are, they're going to tell you: 'please don't do that'.
    Josh:
      Or 'please don't call me'.
    Engi:
      Any request that is out of the norm. Imagine you never talk to this person from your firm but suddenly they're asking about your birthday and your social security number. Maybe don't tell them that. In e-mails, specifically, look out for poor grammar, if there's a lot of spelling mistakes, or if there are weird links. So, a link that should be 'Netflix', is suddenly 'Netflixx'.
    Tom:
      But is there an easy way to tell a real link from a fake one?
    Engi:
      That's a great question. There is! Most of the time, fake links are quite obvious. You can hover over the link to see the full address, and oftentimes, there's a strange domain. So, instead of being from Netflix.com, it's from Netflix.com.321. So, it's not actually from the legit Netflix, but from a subdomain of something called 321. 
    Josh:
      . com.com, maybe?
    Engi:
      Yes, .com.com or .com.org or something like that. Most of the time, if you're on your PC, you can hover over the link and it'll show the full address.
    Josh:
      .com.scam, just to make it obvious.
    Engi:
      Yeah, absolutely. That's a surefire way to know. A bit more difficult, but you can also check for replaced symbols. Instead of making it obvious, these attackers could swap a capital O with a 0, or a capital I with a lowercase l, which is more difficult to tell. If you copy the link - without clicking on it, please don't click on it - into one of those websites, that tells you what characters are being used, they can tell you if that's actually an O or a 0 or if it's actually Cyrillic (find one of these websites linked in the references below).
    Josh:
      There are actually also websites that you can paste a link into and it'll tell you if there's something weird inside. (find one of those linked below as well)
    Engi:
      That's absolutely right.
      Now, I've told you about watching out for weird links and unexpected messages, even from people you know, and watching out for urgency. Now, when you do receive one of these messages, the first thing you have to do, even if it's something that seems urgent, you pause. You think about it. Look at what it actually is, and you'll see things much more clearly. Don't act in a hot-headed way. Don't just do something before actually checking if it is what you're supposed to be doing. As I've said before, call your CEO if he sent you an email and check with him if that's actually what's supposed to be happening. 
      Another good tip is to use Multi-Factor Authentication, or Two-Factor Authentication. That's like those little messages that you can receive on your phone or your e-mail to have a second verification when you're logging into an account. 
      When you do click on a link or put in some information and after a while you realise 'damn, maybe I shouldn't have done that', don't just pretend it didn't happen. That's one of the most important things. Go tell your IT department. Go tell your boss. Go tell someone. There's no shame in those things happening. Maybe in that moment, you're going to feel like an absolute idiot. I mean I've been there. I've felt like I was an absolute idiot. You really just have to be honest about it. Because the more honest you are about those things, the more situations can be avoided, where you're going to be put into even more difficult positions. If you click on a link, for instance, you give out some information, you don't tell anyone and your company ends up getting hacked because of it... well, it's going to be your fault.
    Josh:
      You're cooked.
    Engi:
      Yeah, you're cooked. If you're in the exact same scenario, but you realise 'oh no, that might not have been the best move' and you tell someone, well, they can change the password. They can change the information that you gave out inside your company, so that it's no longer correct. They can change the access code, or whatever it is that you shared. The IT department specifically, they can most probably do something about it, if you tell them about it. If you don't tell them, they're not going to know. So... tell them.
      Last but not least: trust your gut. If something feels weird, don't ignore it. Look into it, ask someone else for their opinion or put it in one of those link checkers that Josh mentioned before. Don't just do the thing anyway even though it feels weird.
    Josh:
      And especially, guys, if you feel that something is weird, just double check it. If you feel it, there may be something, it's not typically for nothing.
    Engi:
      That's right! 
      Now let's get into the legal and ethical implications of the whole social engineering thing. Social engineering, in itself, is illegal, but it can get a bit murky since it's not always easy to pin something on someone. If I tailgated someone and I got into a parking, well, that's illegal. But if I didn't do anything illegal in there, if I didn't break a car or steal something and I just did it because, well, I lose my ticket, there is no real reason to persecute me.
    Josh:
      You mean that there's nothing actually 'really' illegal in what you did.? Like, it's not right, but it's also not illegal?
    Engi:
      Yeah, I mean, the tailgating part was very shady, but I didn't do anything that was 'wrong' by default. There are, however, some cases where social engineering is really, really bad and really illegal. 
      First off, you've heard of it, everyone's heard of it: fraud and identity fraud. Tricking someone in order to gain data or access is typically persecuted as fraud or unauthorized access, even if you're not using specific hacking tools. If you steal someone's identity, that's highly illegal even, you cannot do that.
      We also have liability. For instance, if your company doesn't train you and your coworkers to protect the company's data or fails to protect your data, they can be sued under laws like the GDPR.
      Then, you have the very special case of penetration testing. You might not know what penetration testing is but in very basic words it's when you make a contract with a company or an individual that test your systems for any vulnerabilities, testing whether they can 'hack' into your systems and they can also test whether your employees are trained against social engineering. However, that's where the issue arises: if you didn't specify in your contract that they're allowed to do this, it's illegal, since you didn't give consent. They 'broke' into your headquarters and they probably didn't steal anything because they're doing this for their job, they're not there to steal anything, but they did still do something that was technically illegal.
    Tom:
      So, can a company get in trouble for phishing their own employees?
    Engi:
      Yeah, absolutely. If there's no contract... I mean if you're doing it in the frame of training... If you're doing a training week, for instance and you're going to try to phish your own employees, they probably signed a document saying that it's ok. But if you're just going to randomly send out massive phishing campaigns without having them agree first, well, yeah, that's probably illegal.
    Josh:
      Well, I assume that Tom was talking about a test by the company and not random phishing messages.
    Engi:
      Yeah, so if the company is doing this as part of the training program and at the beginning of the program you signed a document saying that it's ok, then it's fine. As long as there's a contract, in that contract is stipulated what you're allowed and not allowed to do and you don't do the things that you're not allowed to do, you should be fine.
    Josh:
      So, are you saying that in your contract it can be written that you could maybe get sent phishing e-mails?
    Engi:
      I wouldn't say that it would be in your initial work contract. It probably also depends on where you're working, but I mean yeah, if your company regularly does awareness training and regularly tests its employees, maybe that's in your contract. I would say, however, that if your company is just doing a training week, you're probably getting a document on the first day saying that it's ok. 
      Like I said, even doing something without doing it out of ill will or bad intent, can be punished harshly. If I hack into a bank, for instance and I don't actually do anything, I just found some weakness in their systems (and was testing it), well that's still illegal and they can still win a lawsuit against me. Unless, of course, I had a contract with them that I was allowed to do that.
      Right and then the very last thing just to finish off this topic. You probably know that computers have firewalls.
    Josh:
      What exactly is a firewall, though?
    Engi:
      A firewall is a 'system' on your computer that works a bit like an anti-virus, but instead of being for malware, it's for your network. It's there to protect your PC.
    Josh:
      So, you can basically download it and put it on your computer?
    Engi:
      Typically, it's already installed on your computer when you get it.
    Josh:
      That's nice.
    Engi:
      Yeah. And like I was saying, you can have the best security equipment, the best malware detector, the best firewall in the world, if your employee gives some random person their password... well, it's done. They're logging into your 'secure' company and getting all of the information anyway. 
      Here again, I'm going to mention that it's really important to do awareness training, to work with your employees, tell them why they should use Two-Factor Authentication or why they should pay attention to what they're saying or what they're telling people. You can also make it fun by doing scenario-based workshops and, like Tom mentioned before, fake phishing tests - as long as you have consent - and you could even make games or quizzes to make it more fun for your employees and to not make it feel like a chore.
      The goal is not to make perfect humans that don't ever click on any phishing links, but to make your employees confident enough to question things and not just answer and send those 500 thousand euros, but to ask themselves 'well, should I do this?' and to normalize saying 'This doesn't seem right. I'll double-check it with someone else'. 
      Before I get to my conclusion, is there anything you guys want to ask, maybe something wasn't fully clear?
    Josh:
      Hm, no
    Tom:
      Just about the legal and ethical aspect. Is it a crime to pretend to be your boss in an e-mail?
    Engi:
      Well... Probably yes. 
    Josh:
      Why would you do this?
    Engi:
      Yeah, why would you do this? But, if you're doing it... well, if your boss has told you: 'You're now going to write an e-mail, you're going to be me, you're going to write this and that', it's legal. But if you're just randomly pretending to be your boss and telling someone 'Hey, wire me 10 thousand euros, that's not very legal and you'll probably get into a lot of trouble for that.
    Josh:
      So don't pretend to be your boss.
    Engi:
      Yeah, please, Tom, don't do that.
    Josh:
      Or don't pretend to be anyone.
    Tom:
      I won't, I won't.
    Engi:
      Yeah, just be yourself.
      In the end, even if you're doing things just for a joke, or if it's just a joke to you, it can still have very harmful consequences and you really shouldn't do those things, unless it's like absolutely in a controlled environment where the worst thing that can happen is that someone gets embarrassed. But if there's actual real-life consequences that could come from doing it, maybe think twice before doing it.
      So, yeah, to wrap things up: social engineering doesn't require any hacking knowledge, you don't have to be able to use any advanced tools on your PC. It just requires you as a person to know how other people think. And that's what makes it dangerous. We all could fall for something like that. Especially if you're already stressed at work, you haven't been sleeping well and your brain is not functioning as well as it usually does... and then you receive a message from your boss saying to do something, and you do it... well, it happens. And it's too late now. And you've just wired 500 thousand euros to some shady bank account. 
      So, yeah, I guess the takeaway is to always be careful and to be honest if something happens, it's better you be honest upfront and say 'hey, something happened, it was an accident' and you solve it with your coworkers than to pretend nothing happened and get into a whole lot more trouble.
      So, that was it for this episode, I hope you learned something and I hope that you've enjoyed it and that you'll stay tuned for our next episode which will be on password security. That's all from our side and feel free to look around our website, contact us if there is anything at all you want to tell us or ask. And... yeah.
      Stay safe, and don't click any weird links!
      Tom:
        Bye, bye!
      Josh:
        Bye-bye
  de: |
    Engi: 
       Hallo, ich bin Engi
    Josh: 
      Ich bin Josh
    Tom:  
      Und ich bin Tom
    Engi: 
      Und ihr hört gerade '404: Security not found'. Willkommen zu unserer allerersten Folge. Ich würde sagen, wir fangen gleich an, wenn alle bereit sind.
    Josh: 
      Ja, das sind wir!
    Engi: 
      Großartig, ich dachte, wir könnten alles damit beginnen, über SQL-Injections zu sprechen und warum sie so gefährli-
    Josh: 
      Warte, warte, warte, warte, warte. So machen wir das nicht.
    Engi: 
      Nicht?
    Josh: 
      Es muss für jeden verständlich sein.
    Engi: 
      Hm. Nun, dann, ähm... Vielleicht sollten wir über etwas sprechen, das nicht direkt mit Code oder Computern zu tun hat. Vielleicht... wie wäre es mit Social Engineering?
    Tom: 
      Über was?
    Josh: 
      Ja, ich denke, das wäre gut.
    Engi: 
      Ja? Okay, dann lasst uns über Social Engineering sprechen. Tom, du hast gerade gefragt, was das ist, also lass uns gleich loslegen. Social Engineering besteht aus Techniken, mit denen Menschen manipuliert werden, damit sie einem Zugang zu Informationen gewähren, die man eigentlich nicht haben sollten. 
      Es ist ziemlich wirkungsvoll, weil es mit der menschlichen Psychologie spielt und... ja, lass uns herausfinden, wie Angreifer Psychologie, Täuschung und sogar dein Vertrauen nutzen können, um an Informationen zu gelangen, die sie nicht bekommen sollten, oder an Orte, an die sie nicht gelangen sollten.
    Josh: 
      Du meinst also, dass Betrüger tatsächlich Psychologie studieren?
    Engi: 
      Nun, nicht alle, aber sicher einige! Wenn du verstehst, wie der menschliche Verstand funktioniert, kannst du Menschen sehr leicht dazu bringen, das zu tun, was du willst. Beginnen wir also mit einigen grundlegenden Techniken, die von diesen Leuten eingesetzt werden könnten.
      Wie ich schon sagte, ist es sehr psychologisch, und die meiste Zeit wirst du es nicht einmal bemerken! Es geht darum, wie sich Menschen verhalten, und darum, das Wissen darüber, wie jemand reagieren wird, zu nutzen, um ihn zu täuschen.
      Eine der ersten Taktiken ist die Ausnutzung von Vertrauen. Wenn du also jemanden kennenlernst, gehst du zunächst davon aus, dass die Person ehrlich ist. Man wird nicht davon ausgehen, dass jemand ein Lügner ist, wenn man ihn zum ersten Mal trifft. Wenn man arbeitet und jemand in Uniform kommt, die richtige Ausdrucksweise benutzt und sich so verhält, als gehöre er in das Unternehmen, dann wird man das nicht in Frage stellen. Es handelt sich wahrscheinlich nur um den neuen Mitarbeiter.
      Es gibt auch eine Tendenz zur Autorität. Wenn einem also ein Vorgesetzter, der Manager, der Geschäftsführer oder die eigene Mutter etwas sagt, wird man das tun wollen, was sie einem sagen, weil man das schon sein ganzes Leben lang gelernt hat. Angreifer wissen das und geben sich deshalb als Autoritätsperson aus, um einen zu täuschen. So geben sie sich oft als den Chef, die IT-Abteilung oder sogar die Polizei aus.
      Außerdem nutzen sie oft Dringlichkeit oder Angst, um einen dazu zu bringen, so zu reagieren, wie sie es wollen. Wenn dir also jemand sagt: Du musst jetzt handeln, sonst verlierst du ein 50-Millionen-Dollar-Geschäft", dann wirst du das Gefühl haben, dass du jetzt handeln musst, denn, na ja, wenn dein Unternehmen 50 Millionen Dollar oder 50 Millionen Euro verliert,
    Josh:
      Das wäre ja verrückt...
    Engi:
      Dann ist es deine Schuld. Du wirst also so schnell wie möglich handeln wollen, und du wirst Dinge tun, ohne nachzudenken. 
      Und dann ist da natürlich noch die gute alte Gegenseitigkeit. Wenn jemand etwas für dich tut, dir einen Gefallen tut oder dir etwas schenkt, wirst du ihm helfen wollen. Also, ich weiß nicht, Josh... kann ich dir ein Stück Schokolade anbieten und im Gegenzug öffnest du diese verschlossene Tür für mich?
    Josh:
      Hmm, auf diesen Trick falle ich nicht rein. Ich werde die Schokolade nicht nehmen.
    Engi:
      Aber vielleicht hättest du das.
      Es gibt noch einen weiteren Trick, der oft angewandt wird, und das ist der soziale Beweis. Also, wenn diese 10 Leute etwas tun, warum tust du es nicht auch, Josh? Tom tut es. Und ich tue es auch. Warum tust du es also nicht? Weil wir so erzogen wurden, haben wir das Gefühl, dass wir das tun müssen, was andere tun, weil das die sichere Wahl ist, und das ist der Punkt, an dem man in eine Falle tappen würde.
    Josh:
      Warte, denkst du, dass dies eine Besonderheit unserer Kultur ist und, dass es in anderen Ländern anders ist?
    Engi:
      Ich denke, sozialer Druck ist etwas, das es im Grunde in jeder Kultur gibt.
    Josh:
      In der Gesellschaft also.
    Engi:
      Ja, da wir soziale Tiere, soziale Wesen sind, sind wir es aufgrund unserer Gruppenmentalität gewohnt, uns anzupassen und das zu tun, was alle anderen auch tun.
    Josh:
      Ja, stimmt.
    Engi:
      Was sind also die eigentlichen Techniken, wie werden sie genannt, woran kann man jemanden erkennen, der tatsächlich Social Engineering durchführt? Das kann in Person oder online geschehen, und ich werde sowohl über Techniken in Person als auch über Online-Techniken sprechen.
      Techniken in Person... nun, vielleicht hast du das schon mal gemacht. Die meisten Menschen haben das schonmal gemacht, ohne es zu merken. Das ist das Tailgating. Tailgating bedeutet im Grunde, dass man jemandem hinterhergeht und er einem die Tür aufhält, weil man direkt hinter ihm steht, obwohl man eigentlich gar nicht reinkommen dürfte, weil man eine Schlüsselkarte (oder ähnliches) braucht, um sie zu öffnen. Aber gut, du stehst hinter ihnen, und sie denken, du gehörst zum Unternehmen, also halten sie dir die Tür auf. Du gehst hinein. Du hast es geschafft, an einen Ort zu gelangen, an dem du nicht sein solltest.
    Josh:
      So einfach ist es... das ist verrückt.
    Engi:
      Ja. Und es ist viel effektiver, als man denkt. Ich meine, ich habe es getan; ich bin in einen Parkplatz gekommen, nachdem ich mein Ticket verloren hatte (das ich brauchte, um die Tür zu öffnen). 
    Josh:
      Hast du dich selbstbewusster als sonst verhalten? Hast du einfach so getan, als wäre alles normal?
    Engi: 
      Ja, genau! Du gehst einfach hin, als ob du ein Ticket hättest, steckst deine Hand in die Tasche (als ob du das Ticket holen willst) und die Person vor dir... nun, sie hält die Tür auf. Und du gehst einfach hinein.
    Josh:
      Es war einfach ein netter Mensch und jetzt hat er etwas Schlimmes getan.
    Engi:
      Ganz genau. Er könnte eine Menge Ärger bekommen. 
      Dann gibt es noch das Pretexting, auch in Person. Pretexting bedeutet, wie ich bereits erwähnt habe, dass man sich als jemand ausgibt, dem man vertraut, z. B. als Personalverantwortlicher, Mitarbeiter, Freund oder Familienmitglied, um Informationen über einen oder ein Unternehmen zu erhalten oder sogar Zugang zu bestimmten Orten zu bekommen.
      Dann gibt es noch das Baiting. Wie der Name schon sagt, hinterlässt man einen Köder. Sie könnten z. B. ein USB-Laufwerk irgendwo auf einem Parkplatz liegen lassen und etwas wie „vertrauliche Gehälter“ darauf schreiben, und jemand wird es wahrscheinlich aufheben und an seinen Computer anschließen. Und schon hat er Schadsoftware installiert.
    Tom: 
      Fallen die Menschen im Jahr 2025 noch auf USB-Köder herein?
    Engi:
      Ja, es ist kaum zu glauben, aber es gibt immer noch Leute, die glauben, dass der USB- Stick, den sie gefunden haben, absolut sicher ist, um ihn an ihren PC anzuschließen.
    Josh:
      Wie intelligent...
    Engi:
      Es gibt auch Quizze oder Umfragen, die harmlos erscheinen. Etwas wie... „Wie heißt du nach deinem Geburtstag?“ und es gibt Silben für jeden Tag, jedes Jahr, jeden Monat, du schreibst deinen „Namen“ in die Kommentare eines zufälligen Instagram-Posts und boom. Du hast einer beliebigen Person dein Geburtsdatum verraten. Oder den Namen deines Haustiers. Oder die Stadt, in der du geboren wurdest. Und das sind oft die Antworten auf Sicherheitsfragen, mit denen man die Anmeldung auf verschiedenen Plattformen umgehen kann.
    Josh: 
      Übrigens, wenn ich sage „wie intelligent“, dann meine ich nicht, dass Leute, die einfach nur USB-Geräte an ihren Computer anschließen, dumm sind. Es ist nur so, dass... ihr wisst schon...
    Engi:
      Nein, natürlich nicht. Das kann jedem von uns passieren. Vielleicht ist man gestresst, und der USB-Stick schien ganz interessant zu sein. Oder man hat ihn irgendwo gefunden, wo man ihn für sicher hielt, vielleicht in seinem Büro. Aber trotzdem muss man vorsichtig sein, denn jeder USB-Stick kann Malware enthalten. Selbst ein USB-Stick, dem man zu vertrauen scheint und den man schon einmal benutzt hat. Wenn jemand anderes ihn in die Hände bekommt, kann er Malware darauf installieren.
      Nun zu den Online-Möglichkeiten für Social Engineering.
      Sie haben den Begriff wahrscheinlich schon einmal gehört; ich denke, jeder hat ihn schon einmal gehört: Phishing. Es gibt also verschiedene Arten von Phishing, aber fangen wir mit dem normalen Phishing an. Was ist Phishing? Für diejenigen, die noch nie eine dieser seltsamen E-Mails erhalten haben oder nie gemerkt haben, dass sie eine erhalten haben, bedeutet Phishing im Grunde, dass gefälschte E-Mails verschickt werden, die vorgeben, von einer legitimen Quelle zu stammen. Von der Bank oder der Post, die einem mitteilt, dass ein Paket beim Zoll feststeckt und man 10 Euro zahlen muss, um es zu bekommen, oder dass man bitte seine Bankdaten auf dieser Website eingeben soll, die überhaupt nicht verdächtig ist. In diesen E-Mails gibt es ein paar Dinge, auf die man achten kann, aber dazu komme ich gleich noch.
      Es gibt das Vishing, das im Grunde dasselbe ist wie Phishing, nur dass es nicht in Form einer E-Mail, sondern in Form eines Telefonanrufs erfolgt. Man ruft an und gibt vor, vom Kundendienst, von der Polizei oder der Chef zu sein. Auch hier geht es darum, Informationen über das Unternehmen oder die Person zu erhalten, um bösartige Dinge zu tun.
      Es gibt auch Smishing. Auch hier geht es um dasselbe, nur per SMS. Smishing ist genau dasselbe wie Phishing und Vishing, nur dass man eine SMS erhält. Man erhält eine SMS, in der es heißt, dass das Paket verspätet eintrifft oder das Bankkonto gehackt wurde oder so etwas Ähnliches, und man wird gebeten, seine Anmeldedaten einzugeben.
    Josh:
      Vorsicht ist angesagt. Das passiert öfter, als man denkt.
    Engi:
      Ja, darauf bin ich schon einmal hereingefallen!
      Es gibt auch Whaling und Spear-Phishing. Die sind sich ziemlich ähnlich. Beim Whaling geht es um Menschen in hohen Positionen. Das heißt, sie hätten es wahrscheinlich nicht auf mich abgesehen, sondern auf den Geschäftsführer meiner Firma. Sie würden sich eine Menge Informationen über diese Personen beschaffen und versuchen, sie gezielt anzugreifen. Beim Spear-Phishing hingegen geht es nur darum, eine bestimmte Person (nicht unbedingt in einer hohen Position) ins Visier zu nehmen, anstatt eine Massen-E-Mail an hundert Personen zu schicken, die überhaupt nicht personalisiert ist und die man ziemlich leicht von einer echten E-Mail unterscheiden kann. Beim Spear-Phishing recherchiert der Angreifer gezielt über die Person und den Dienst, für den er sich ausgeben will, und schickt eine E-Mail, die auf die Person zugeschnitten ist. In diesem Fall ist es sehr viel schwieriger zu erkennen, dass es sich um eine Phishing-E-Mail handelt.
      Wie versprochen, werden wir nun darüber sprechen, wie man diese Angriffe erkennen und verhindern kann. Erstens: Es wird wahrscheinlich irgendwann passieren. Man wird auf so etwas hereinfallen. Ich werde also ein wenig darüber reden, was man tun kann, um nicht auf diese Betrügereien hereinzufallen...
    Josh:
      Nein, nicht Tom. Ich kenne ihn. 
    Engi:
      Nicht Tom.
    Josh:
      Er würde nicht darauf hineinfallen.
    Engi:
      Tom, was sagst du dazu?
    Tom:
      Ich meine... Ich würde nicht darauf reinfallen. Heutzutage nicht. Vielleicht, als ich ein Kind war... 
    Engi:
      Denkst du?
    Tom:
      Ich denke nicht.
    Engi:
      Okay...
    Josh:
      Wie?
    Engi:
      Ja, wie? 
    Tom:
      Ich meine, ich klicke nie auf irgendwelche komischen Links.
    Engi:
      Sogar wenn die E-mail von Josh ist?
    Tom:
      Wenn es von Josh kommt, würde ich es wohl erkennen. Weißt du?
    Engi:
      Würdest du?
    Josh:
      Was ist, wenn es jemand anderes ist, der sich wie ich verhält?
    Engi:
      Ja, was ist, wenn ich so tue, als wäre ich Josh? Ich kenne ihn auch ziemlich gut.
    Tom:
      Ich meine... ja... so habe ich noch nie darüber nachgedacht... ja.
    Josh:
      Das kann passieren, ja.
    Engi:
      Also, ich werde auch ein bisschen darüber reden, was man tun kann, wenn etwas passiert. Also, zunächst einmal, worauf sollte man achten?
      Jegliche plötzliche Dringlichkeit. Es ist besser, wenn man die Dinge mit der Person abklärt. Wenn man eine seltsame E-Mail von seinem Chef erhält, in der er einen auffordert, sofort 500.000 Euro auf ein bestimmtes Bankkonto zu überweisen... dann sollte man seinen Chef anrufen. Die Chancen stehen gut, dass er einem sagen wird: 'Bitte tun Sie das nicht'.
    Josh:
      Oder „Bitte rufen Sie mich nicht an“.
    Engi:
      Jede Anfrage, die außerhalb der Norm liegt. Stellt euch vor, ihr sprecht nie mit dieser Person aus eurer Firma, aber plötzlich fragt sie nach eurem Geburtstag und eurer Sozialversicherungsnummer. Geben sie das vielleicht nicht an. Bei E-Mails sollte man vor allem auf schlechte Grammatik, viele Rechtschreibfehler oder seltsame Links achten. Ein Link, der „Netflix“ lauten sollte, ist plötzlich „Netflixx“.
    Tom:
      Aber gibt es eine einfache Möglichkeit, einen echten Link von einem gefälschten zu unterscheiden?
    Engi:
      Das ist eine gute Frage. Es gibt sie! Meistens sind gefälschte Links ziemlich offensichtlich. Man kann mit dem Mauszeiger über den Link fahren, um die vollständige Adresse zu sehen, und oft gibt es eine seltsame Adresse. Anstatt von Netflix.com kommt er also von Netflix.com.321. Also nicht vom echten Netflix, sondern von einer Subdomain von etwas namens 321. 
    Josh:
      . com.com, vielleicht?
    Engi:
      Ja, .com.com oder .com.org oder so ähnlich. Wenn man am PC ist, kann man meistens mit dem Mauszeiger über den Link fahren, und es wird die vollständige Adresse angezeigt.
    Josh:
      .com.scam, nur um es deutlich zu machen.
    Engi:
      Ja, absolut. Das ist eine todsichere Methode, um das herauszufinden. Es ist etwas schwieriger, aber man kann auch nach ersetzten Symbolen suchen. Anstatt es offensichtlich zu machen, könnten diese Angreifer ein großes O mit einer 0 oder ein großes I mit einem kleinen l vertauschen, was schwieriger zu erkennen ist. Wenn man den Link - ohne darauf zu klicken - in eine dieser Websites kopiert, die einem sagen, welche Zeichen verwendet werden, kann man feststellen, ob es sich tatsächlich um ein O oder eine 0 handelt oder ob es sich um kyrillisches Schriftzeichen handelt (eine dieser Websites findet man in den unten angegebenen Links).
    Josh:
      Es gibt auch Websites, auf denen man einen Link einfügen kann und die einem dann sagen, ob etwas Seltsames drin ist. (eine davon ist ebenfalls unten verlinkt)
    Engi:
      Das ist absolut richtig.
      Ich habe vorhin gesagt, dass man auf seltsame Links und unerwartete Nachrichten achten soll, sogar von Leuten, die man kennt, und dass man auf Dringlichkeit achten soll. Wenn man eine solche Nachricht erhält, muss man als Erstes innehalten, auch wenn es dringend zu sein scheint. Man denkt darüber nach. Man muss überlegen, worum es eigentlich geht, und dann sieht man die Dinge viel klarer. Handelt nicht voreilig. Man soll nicht einfach etwas tun, bevor man nicht überprüft hat, ob es wirklich das ist, was man tun soll. Wie ich bereits gesagt habe, kann man seinen CEO anrufen, wenn er einem eine E-Mail geschickt hat, und mit ihm abzuklären, ob das wirklich das ist, was man tun soll. 
      Ein weiterer guter Tipp ist die Verwendung der Multi-Faktor-Authentifizierung oder Zwei-Faktor-Authentifizierung. Das sind diese kleinen Nachrichten, die man auf seinem Telefon oder in seiner E-Mail erhält, um eine zweite Bestätigung zu erhalten, wenn man sich bei einem Konto anmeldet.
      Wenn du auf einen Link klickst oder eine Information eingibst und nach einer Weile feststellst: „Vielleicht hätte ich das nicht tun sollen“, dann tu nicht einfach so, als wäre das nicht passiert. Das ist eines der wichtigsten Dinge. Man muss es seiner IT-Abteilung sagen. Seinem Chef. Irgendjemandem. Es ist keine Peinlichkeit, wenn so etwas passiert. Vielleicht wird man sich in diesem Moment wie ein absoluter Idiot fühlen. Ich meine, das habe ich auch schon erlebt. Ich hatte das Gefühl, ein absoluter Idiot zu sein. Man muss nur ehrlich damit umgehen. Denn je ehrlicher man in diesen Dingen ist, desto mehr Situationen lassen sich vermeiden, in denen man in noch schwierigere Situationen gerät. Wenn du zum Beispiel auf einen Link klickst, Informationen preisgibst, es niemandem erzählst und dein Unternehmen deswegen gehackt wird ... nun, dann ist es deine Schuld.
      Wenn man genau dasselbe Szenario erlebt, aber feststellt, dass das vielleicht nicht die beste Entscheidung war, und es jemandem erzählt, dann kann man das Passwort ändern. Man kann die Informationen, die man innerhalb des Unternehmens weitergegeben hat, ändern, so dass sie nicht mehr korrekt sind. Man kann den Zugangscode ändern, oder was auch immer man eben weitergegeben hat. Die IT-Abteilung kann höchstwahrscheinlich etwas dagegen unternehmen, wenn man sie darüber informiert. Wenn man es ihnen nicht sagt, werden sie es nicht erfahren. Also... soll man sowas definitiv weitersagen.
      Und zu guter Letzt: Man muss auf sein Bauchgefühl hören. Wenn sich etwas seltsam anfühlt, soll man es nicht ignorieren. Man muss der Sache auf den Grund gehen, jemand anderen um seine Meinung bitten oder einen dieser Link-Checker benutzen, die Josh bereits erwähnt hat. Man sollte es nicht einfach tun ohne es zu hinterfragen, selbst wenn es sich komisch anfühlt.
    Josh:
      Und vor allem, Leute, wenn ihr das Gefühl habt, dass etwas seltsam ist, überprüft es einfach. Wenn ihr das Gefühl habt, dass da etwas sein könnte, dann ist das normalerweise nicht umsonst.
    Engi:
      Das ist stimmt! 
      Kommen wir nun zu den rechtlichen und ethischen Implikationen der ganzen Social-Engineering-Sache. Social Engineering an sich ist illegal, aber es kann ein wenig undurchsichtig werden, da es nicht immer einfach ist, jemandem etwas anzuhängen. Wenn ich tailgaiting benutzt habe und Zugang zu einem Parkplatz bekommen habe, dann ist das natürlich illegal. Aber wenn ich dort nichts Illegales getan habe, wenn ich kein Auto aufgebrochen oder etwas gestohlen habe und ich es nur getan habe, weil ich mein Ticket verloren habe, gibt es keinen wirklichen Grund, mich zu bestrafen.
    Josh:
      Du meinst, dass das, was du getan hast, nicht „wirklich“ illegal ist? Das heißt, es ist nicht richtig, aber es ist auch nicht illegal?
    Engi:
      Ja, ich meine, der Teil mit dem Tailgating war sehr fragwürdig, aber ich habe nichts getan, was von vornherein „falsch“ war. Es gibt jedoch einige Fälle, in denen Social Engineering wirklich schlimm und illegal ist. 
      Jeder hat schon einmal davon gehört: Betrug und Identitätsbetrug. Jemanden auszutricksen, um an Daten oder Zugang zu gelangen, wird in der Regel als Betrug oder unbefugter Zugang verfolgt, selbst wenn man keine speziellen Hacking- Werkzeuge verwendet. Wenn man jemandem die Identität stiehlt, ist das sogar höchst illegal.
      Es gibt auch Verantwortlichkeiten. Wenn beispielsweise das Unternehmen einen nicht schult, um die Daten des Unternehmens zu schützen, oder es versäumt, die Daten zu schützen, kann es nach Gesetzen wie der Datenschutz-Grundverordnung verklagt werden.
      Dann gibt es noch den sehr speziellen Fall der Penetrationstests. Vielleicht weiß der eine oder andere nicht, was Penetrationstests sind, aber ganz einfach ausgedrückt geht es darum, dass man einen Vertrag mit einem Unternehmen oder einer Person abschließt, die Ihre Systeme auf Schwachstellen testet und prüft, ob sie sich in Ihre Systeme „einhacken“ können und ob Ihre Mitarbeiter gegen Social Engineering geschult sind. Doch genau hier liegt das Problem: Wenn im Vertrag nicht festgelegt wurde, dass dies erlaubt ist, ist es illegal, da keine Zustimmung von Seiten des Unternehmens vorliegt. Man ist in Ihr Hauptquartier „eingebrochen“ und hat wahrscheinlich nichts gestohlen, weil man das aus beruflichen Gründen tut und nicht, um etwas zu stehlen, aber man hat trotzdem etwas getan, was technisch gesehen illegal ist.
    Tom:
      Kann ein Unternehmen also für das Phishing seiner eigenen Mitarbeiter in Schwierigkeiten geraten?
    Engi:
      Ja, absolut. Wenn es keinen Vertrag gibt... Ich meine, wenn man es im Rahmen einer Schulung macht... Wenn man zum Beispiel eine Schulungswoche durchführt und versucht, die eigenen Mitarbeiter zu phishen, haben sie wahrscheinlich ein Dokument unterschrieben, in dem steht, dass das in Ordnung ist. Aber wenn man einfach wahllos massive Phishing-Kampagnen verschickt, ohne sie vorher um Erlaubnis zu fragen, dann ist das wahrscheinlich illegal.
    Josh:
      Ich gehe davon aus, dass Tom von einem Test des Unternehmens und nicht von zufälligen Phishing-Nachrichten gesprochen hat.
    Engi:
      Ja, wenn das Unternehmen dies als Teil des Schulungsprogramms durchführt und man zu Beginn des Programms ein Dokument unterschreibt, in dem steht, dass es in Ordnung ist, dann ist es in Ordnung. Solange es einen Vertrag gibt, in dem festgelegt ist, was man tun darf und was nicht, und man die Dinge nicht tut, die man nicht tun darf, sollte es kein Problem sein. 
    Josh:
      Du meinst also, dass in deinem Vertrag festgehalten werden kann, dass du vielleicht Phishing-E-Mails erhalten könntest? 
    Engi:
      Ich würde nicht sagen, dass dies im ursprünglichen Arbeitsvertrag festgelegt ist. Es hängt wahrscheinlich auch davon ab, wo man arbeitet, aber ich meine, ja, wenn das Unternehmen regelmäßig Sensibilisierungsschulungen durchführt und seine Mitarbeiter regelmäßig testet, steht das vielleicht im Vertrag. Ich würde jedoch sagen, dass man, wenn das Unternehmen nur eine Schulungswoche durchführt, wahrscheinlich am ersten Tag ein Dokument erhält, in dem steht, dass es in Ordnung ist. 
      Wie ich schon sagte, kann auch etwas, das man nicht aus bösem Willen oder mit böser Absicht tut, hart bestraft werden. Wenn ich mich zum Beispiel in eine Bank hacke und eigentlich gar nichts tue, sondern nur eine Schwachstelle in ihren Systemen finde (und diese teste), dann ist das immer noch illegal, und die Bank kann trotzdem einen Prozess gegen mich gewinnen. Es sei denn, ich hatte einen Vertrag mit ihnen, der mir das erlaubte.
      Richtig, und dann der allerletzte Punkt, um dieses Thema abzuschließen. Ihr wisst wahrscheinlich, dass Computer Firewalls haben.
    Josh:
      Aber was genau ist eine Firewall?
    Engi:
      Eine Firewall ist ein „System“ auf dem Computer, das ähnlich wie ein Antivirenprogramm funktioniert, aber nicht für Malware, sondern für das Netzwerk. Sie ist dazu da, den PC zu schützen.
    Josh:
      Man kann sie also einfach herunterladen und auf dem Computer installieren?
    Engi:
      Normalerweise ist es bereits auf dem Computer installiert, wenn man ihn bekommt.
    Josh:
      Das ist praktisch.
    Engi:
      Ja, genau. Und wie ich schon sagte, man kann die beste Sicherheitsausrüstung, den besten Malware-Detektor und die beste Firewall der Welt haben, aber wenn ein Angestellter irgendeiner zufälligen Person sein Passwort gibt ... nun, dann ist es eben so. Derjenige loggt sich in das „sichere“ Unternehmen ein und kommt so an alle möglichen Informationen. 
      Auch hier möchte ich erwähnen, dass es wirklich wichtig ist, Schulungen zur Sensibilisierung durchzuführen, mit den Mitarbeitern zu arbeiten und ihnen zu erklären, warum sie Zwei-Faktor-Authentifizierung verwenden sollten oder warum sie darauf achten sollten, was sie sagen oder was sie anderen mitteilen. Das ganze kann auch Spaß machen, wenn man szenariobasierte Workshops durchführt und, wie Tom bereits erwähnte, Phishing-Tests vortäuscht - sofern man die Zustimmung dazu hat - und man könnte sogar Spiele oder Quizspiele entwickeln, damit es den Mitarbeitern mehr Spaß macht und nicht wie eine lästige Pflicht erscheint.
      Das Ziel ist nicht, perfekte Menschen zu schaffen, die niemals auf einen Phishing-Link klicken, sondern die Mitarbeiter selbstbewusst genug zu machen, um Dinge zu hinterfragen und nicht einfach zu antworten und die 500.000 Euro zu überweisen, sondern sich zu fragen: „Sollte ich das tun?“ und zu sagen: "Das scheint nicht richtig zu sein. Ich werde es noch einmal mit jemandem überprüfen". 
      Bevor ich zum Schluss komme: Gibt es irgendetwas, das ihr fragen wollt, vielleicht war etwas nicht ganz klar?
    Josh:
      Hm, nein, nicht wirklich.
    Tom:
      Nur kurz zum rechtlichen und ethischen Aspekt. Ist es ein Verbrechen, sich in einer E-Mail als sein Chef auszugeben?
    Engi:
      Nun ja... Wahrscheinlich ja. 
    Josh:
      Warum solltest du das tun?
    Engi:
      Ja, warum würdest du das tun? Aber, wenn du es tust... nun, wenn dein Chef dir gesagt hat: 'Du wirst jetzt eine E-Mail schreiben, du wirst ich sein, du wirst dies und das schreiben', dann ist es legal. Aber wenn du einfach so tust, als wärst du dein Chef und jemandem sagst: „Hey, überweise mir 10.000 Euro“, dann ist das nicht sehr legal und du wirst dafür wahrscheinlich eine Menge Ärger bekommen.
    Josh:
      Gib also nicht vor, dein Chef zu sein.
    Engi:
      Ja, bitte, Tom, tu das nicht.
    Josh:
      Oder tu nicht so, als wärst du irgendjemand anderes.
    Tom:
      Das werde ich schon nicht.
    Engi:
      Ja, sei einfach du selbst.
      Selbst wenn man etwas nur aus Spaß macht oder wenn es für einen selbst nur ein Spaß ist, kann es sehr schädliche Folgen haben, und man sollte so etwas wirklich nicht tun, es sei denn, es handelt sich um eine absolut kontrollierte Umgebung, in der das Schlimmste, was passieren kann, ist, dass es jemandem peinlich ist. Aber wenn es tatsächlich Konsequenzen im wirklichen Leben hat, sollte man es sich vielleicht zweimal überlegen, bevor man es tut.
      Zusammenfassend lässt sich sagen, dass für Social Engineering keine Hacking-Kenntnisse erforderlich sind, man muss keine fortgeschrittenen PC-Tools benutzen können. Es erfordert lediglich, dass man als Person weiß, wie andere Menschen denken. Und genau das macht es so gefährlich. Wir alle könnten auf so etwas hereinfallen. Vor allem, wenn man auf der Arbeit schon gestresst ist, nicht gut geschlafen hat und das Gehirn nicht so gut funktioniert wie sonst... und dann erhält man eine Nachricht von seinem Chef, in der er einen auffordert, etwas zu tun, und man tut es... nun, dann ist es passiert. Und jetzt ist es zu spät. Und man hat gerade 500.000 Euro auf ein dubioses Bankkonto überwiesen. 
      Wenn etwas passiert, ist es besser, von vornherein ehrlich zu sein und zu sagen: „Hey, es ist etwas passiert, es war ein Unfall“, und die Sache mit den Kollegen zu klären, als so zu tun, als sei nichts passiert, und noch mehr Ärger zu bekommen.
      So, das war es für diese Folge, ich hoffe, ihr habt etwas gelernt und ich hoffe, dass es euch gefallen hat und dass ihr für unsere nächste Folge dranbleibt, in der es um Passwortsicherheit gehen wird. Das war's von unserer Seite, und ihr könnt euch gerne auf unserer Website umsehen und uns kontaktieren, wenn ihr uns irgendetwas sagen oder fragen wollt. Und... ja.
      Bleibt sicher und klickt keine seltsamen Links an!
    Tom:
      Tschüss!
    Josh:
      Auf Wiedersehen!
  fr: |
    Engi: 
      Bonjour, je suis Engi
    Josh : 
      Je suis Josh
    Tom : 
      Et je suis Tom
    Engi : 
      Et vous êtes en train d'écouter '404 : Security not found'. Bienvenue à notre tout premier épisode. Je dirais que nous allons commencer dès que tout le monde sera prêt.
    Josh : 
      Oui, nous le sommes !
    Engi : 
      Super, je pensais que nous pourrions tout commencer en parlant des injections SQL et pourquoi elles sont si dangereuses-
    Josh : 
      Attends, attends. Nous ne faisons pas ça comme ça.
    Engi : 
      Non ?
    Josh : 
      Il faut que ce soit compréhensible pour tout le monde.
    Engi : 
      Hm. Eh bien, alors, euh... Peut-être que nous devrions parler de quelque chose qui n'est pas directement lié au code ou aux ordinateurs. Peut-être... pourquoi pas l'ingénierie sociale ?
    Tom : 
      La quoi ?
    Josh : 
      Oui, je pense que ce serait bien.
    Engi : 
      Oui ? Bon, alors parlons d'ingénierie sociale. Tom, tu viens de demander ce que c'est, alors allons-y tout de suite. L'ingénierie sociale consiste à utiliser des techniques pour manipuler les gens afin qu'ils te donnent accès à des informations que tu ne devrais pas avoir. 
      C'est assez efficace parce que ça joue sur la psychologie humaine et... oui, découvrons comment les attaquants peuvent utiliser la psychologie, la tromperie et même votre confiance pour accéder à des informations qu'ils ne devraient pas obtenir ou à des endroits où ils ne devraient pas aller.
    Josh: 
      Tu penses donc que les escrocs étudient réellement la psychologie ?
    Engi : 
      Eh bien, pas tous, mais certainement quelques-uns ! Si tu comprends comment fonctionne l'esprit humain, tu peux très facilement amener les gens à faire ce que tu veux. Commençons donc par quelques techniques de base qui pourraient être utilisées par ces personnes.
      Comme je l'ai déjà dit, c'est très psychologique, et la plupart du temps, tu ne le remarqueras même pas ! Il s'agit de voir comment les gens se comportent et d'utiliser ces connaissances de la façon dont quelqu'un va réagir pour le tromper.
      L'une des premières tactiques consiste à exploiter la confiance. Ainsi, lorsque tu rencontres quelqu'un, tu commences par supposer que la personne est honnête. On ne va pas supposer que quelqu'un est un menteur quand on le rencontre pour la première fois. Si tu travailles et que quelqu'un arrive en uniforme, utilise les bonnes expressions et se comporte comme s'il faisait partie de l'entreprise, tu ne remettras pas cela en question. Il s'agit probablement simplement du nouveau collaborateur.
      Il y a aussi une tendance à l'autorité. Ainsi, si un supérieur, un manager, un directeur ou votre propre mère vous dit quelque chose, vous voudrez faire ce qu'ils vous disent parce que vous avez appris à le faire toute votre vie. Les agresseurs le savent et se font donc passer pour des figures d'autorité afin de vous tromper. Ainsi, ils se font souvent passer pour le chef, le service informatique ou même la police.
      En outre, ils utilisent souvent l'urgence ou la peur pour vous faire réagir comme ils le souhaitent. Ainsi, si quelqu'un vous dit : "Tu dois agir maintenant, sinon tu vas perdre une affaire de 50 millions de dollars", vous aurez le sentiment que vous devez agir maintenant, parce que, eh bien, si votre entreprise perd 50 millions de dollars ou 50 millions d'euros,
    Josh :
      Ce serait fou...
    Engi :
      Alors c'est de votre faute. Donc vous allez vouloir agir le plus vite possible, et vous allez faire des choses sans réfléchir. 
      Et puis, bien sûr, il y a la bonne vieille réciprocité. Si quelqu'un fait quelque chose pour vous, vous rend un service ou vous fait un cadeau, vous voudrez l'aider. Alors, je ne sais pas, Josh... je peux t'offrir un morceau de chocolat et en échange tu m'ouvres cette porte fermée ?
    Josh:
      Hmm, je ne tomberai pas dans ce piège. Je ne prendrai pas le chocolat.
    Engi :
      Mais peut-être que tu l'aurais fait.
      Il y a une autre astuce qui est souvent utilisée, et c'est la preuve sociale. Alors, si ces dix personnes font quelque chose, pourquoi ne le fais-tu pas toi aussi, Josh ? Tom le fait. Et je le fais aussi. Alors pourquoi tu ne le fais pas ? Comme nous avons été éduqués de cette manière, nous avons le sentiment que nous devons faire ce que font les autres, parce que c'est le choix le plus prudent, et c'est là que l'on tombe dans un piège.
    Josh :
      Attends, penses-tu qu'il s'agit d'une particularité de notre culture et que c'est différent dans d'autres pays ?
    Engi :
      Je pense que la pression sociale est quelque chose qui existe fondamentalement dans toutes les cultures.
    Josh :
      Donc, dans la société.
    Engi :
      Oui, comme nous sommes des animaux sociaux, des êtres sociaux, nous sommes habitués, en raison de notre mentalité de groupe, à nous adapter et à faire ce que tout le monde fait.
    Josh :
      Oui, c'est vrai.
    Engi:
      Quelles sont donc les techniques proprement dites, comment les appelle-t-on, comment peut-on reconnaître quelqu'un qui pratique effectivement l'ingénierie sociale ? Cela peut se faire en personne ou en ligne, et je vais parler à la fois des techniques en personne et des techniques en ligne.
      Les techniques en personne... Eh bien, peut-être que vous l'avez déjà fait. La plupart des gens l'ont déjà fait sans s'en rendre compte. C'est le tailgating. Le tailgating signifie en gros que tu suis quelqu'un et qu'il te tient la porte parce que tu es juste derrière lui, alors que tu n'es pas censé entrer parce que tu as besoin d'une carte-clé (ou autre) pour l'ouvrir. Mais bon, tu es derrière lui et il pensent que tu fais partie de l'entreprise, alors il te tient la porte. Tu entres à l'intérieur. Et tu as réussi à te rendre à un endroit où tu n'es pas censé être.
    Josh :
      C'est aussi simple que ça... c'est fou.
    Engi :
      Oui. Et c'est beaucoup plus efficace qu'on ne le pense. Je veux dire, je l'ai fait ; je suis entré dans un parking après avoir perdu mon ticket (dont j'avais besoin pour ouvrir la porte). 
    Josh:
      Est-ce que tu t'es comporté avec plus d'assurance que d'habitude ? Est-ce que tu as simplement fait comme si tout était normal ?
    Engi : 
      Oui, c'est ça ! Tu y vas simplement comme si tu avais un billet, tu mets ta main dans ta poche (comme si tu allais chercher le billet) et la personne devant toi... et bien, elle tient la porte ouverte. Et tu entres tout simplement.
    Josh :
      C'était juste une personne gentille et maintenant elle a fait quelque chose de mal.
    Engi :
      Exactement. Elle risque d'avoir beaucoup de problèmes. 
      Ensuite, il y a le pretexting, également en personne. Le pretexting, comme je l'ai déjà mentionné, consiste à se faire passer pour quelqu'un en qui on a confiance, par exemple un responsable des ressources humaines, un collaborateur, un ami ou un membre de la famille, afin d'obtenir des informations sur soi ou sur une entreprise, ou même d'avoir accès à certains lieux.
      Ensuite, il y a le baiting. Comme son nom l'indique, il s'agit de laisser un appât derrière soi. Vous pourriez par exemple laisser une clé USB quelque part sur un parking et y écrire quelque chose comme « salaires confidentiels », et quelqu'un la ramassera probablement et la connectera à son ordinateur. Et il aura donc installé un logiciel malveillant.
    Tom : 
      En 2025, les gens tomberont-ils encore dans le piège des leurres USB ?
    Engi :
      Oui, c'est difficile à croire, mais il y a encore des gens qui pensent que la clé USB qu'ils ont trouvée est parfaitement sûre pour la brancher sur leur PC.
    Josh :
      Quelle intelligence...
    Engi:
      Il y a aussi des quiz ou des sondages qui semblent inoffensifs. Quelque chose comme... « Quel est ton nom après ton anniversaire ? » et il y a des syllabes pour chaque jour, chaque année, chaque mois, tu écris ton « nom » dans les commentaires d'un post Instagram aléatoire et boum. Tu as révélé ta date de naissance à une personne de ton choix. Ou le nom de ton animal de compagnie. Ou la ville dans laquelle tu es né. Et ce sont souvent des réponses à des questions de sécurité qui permettent de contourner l'inscription sur différentes plates-formes.
    Josh : 
      Au fait, quand je dis « quelle intelligence », je ne veux pas dire que les gens qui se contentent de brancher des périphériques USB sur leur ordinateur sont stupides. C'est juste que... vous savez...
    Engi :
      Non, bien sûr que non. Cela peut arriver à chacun d'entre nous. Peut-être qu'on est stressé et que la clé USB semblait tout à fait intéressante. Ou alors on l'a trouvée quelque part où on pensait qu'elle était en sécurité, peut-être dans son bureau. Mais il faut quand même être prudent, car toute clé USB peut contenir des logiciels malveillants. Même une clé USB en laquelle on semble avoir confiance et que l'on a déjà utilisée. Si quelqu'un d'autre s'en empare, il peut y installer des logiciels malveillants.
      Passons maintenant aux possibilités d'ingénierie sociale en ligne.
      Vous avez probablement déjà entendu ce terme ; je pense que tout le monde l'a déjà entendu : le phishing. Il existe donc différents types de phishing, mais commençons par le phishing normal. Qu'est-ce que le phishing ? Pour ceux qui n'ont jamais reçu un de ces étranges e-mails ou qui n'ont jamais remarqué qu'ils en avaient reçu un, le phishing consiste essentiellement à envoyer de faux e-mails en prétendant qu'ils proviennent d'une source légitime. De la banque ou de la poste, qui vous dit qu'un paquet est bloqué à la douane et que vous devez payer 10 euros pour le récupérer, ou que vous devez s'il vous plaît entrer vos coordonnées bancaires sur ce site qui n'est pas du tout suspect. Dans ces e-mails, il y a quelques éléments auxquels il faut faire attention, mais j'y reviendrai dans un instant.
      Il y a le vishing, qui est en fait la même chose que le phishing, sauf qu'il ne prend pas la forme d'un e-mail, mais d'un appel téléphonique. On appelle en se faisant passer pour le service clientèle, la police ou le patron. Là encore, il s'agit d'obtenir des informations sur l'entreprise ou la personne afin de faire des choses malveillantes.
      Il y a aussi le smishing. Là aussi, il s'agit de la même chose, mais par SMS. Le smishing est exactement la même chose que le phishing et le vishing, sauf que l'on reçoit un SMS. On reçoit un SMS disant que le colis est arrivé en retard ou que le compte bancaire a été piraté ou quelque chose comme ça, et on nous demande de donner nos données de connexion.
    Josh:
      Il faut être prudent. Cela arrive plus souvent qu'on ne le pense.
    Engi :
      Oui, je me suis déjà fait avoir une fois !
      Il y a aussi le whaling et le spear phishing. Ils sont assez similaires. Dans le cas du whaling, il s'agit de personnes occupant des postes élevés. Cela signifie que les escrocs ne s'en prendraient probablement pas à moi, mais au directeur de mon entreprise. Ils se procureraient beaucoup d'informations sur cette personne et tenteraient de l'attaquer de manière ciblée. En revanche, le spear phishing consiste uniquement à cibler une personne spécifique (pas nécessairement haut placée), plutôt que d'envoyer un e-mail à une centaine de personnes, qui n'est pas du tout personnalisé et qui est assez facile de distinguer d'un véritable e-mail. Dans le cas du spear phishing, l'attaquant fait des recherches ciblées sur la personne et le service pour lequel il veut se faire passer, et envoie un e-mail personnalisé à cette personne. Dans ce cas, il est beaucoup plus difficile de reconnaître qu'il s'agit d'un e-mail d'hameçonnage.
      Comme promis, nous allons maintenant parler de la manière de reconnaître et de prévenir ces attaques. Tout d'abord, cela finira probablement par arriver. On se fera avoir par ce genre de choses. Je vais donc parler un peu de ce que l'on peut faire pour ne pas se faire avoir par ces arnaques
    Josh:
      Non, pas Tom. J'le connais. 
    Engi:
      Pas Tom.
    Josh:
      Il ne se ferait pas avoir.
    Engi:
      Tom, qu'en dis-tu?
    Tom:
      Je veux dire... Je ne me ferais pas avoir. Pas aujourd'hui, en tout cas. Peut-être quand j'étais enfant... 
    Engi :
      Tu crois ?
    Tom :
      Je ne pense pas.
    Engi :
      D'accord...
    Josh :
      Comment ?
    Engi :
      Oui, comment ? 
    Tom :
      Je veux dire, je ne clique jamais sur des liens bizarres.
    Engi :
      Même si l'e-mail vient de Josh ?
    Tom :
      S'il venait de Josh, je pense que je le reconnaîtrais. Tu sais ?
    Engi :
      Le ferais-tu ?
    Josh :
      Et si c'était quelqu'un d'autre qui se comportait comme moi ?
    Engi :
      Oui, et si je faisais semblant d'être Josh ? Je le connais assez bien aussi.
    Tom :
      Je veux dire... oui... je n'y ai jamais pensé de cette façon... oui.
    Josh :
      Ça peut arriver, oui.
    Engi :
      Alors, je vais aussi parler un peu de ce qu'on peut faire quand quelque chose arrive. Donc, tout d'abord, à quoi faut-il faire attention ?
      Toute urgence soudaine. Il est préférable de clarifier les choses avec la personne. Si vous recevez un e-mail étrange de votre patron vous demandant de transférer immédiatement 500.000 euros sur un compte bancaire spécifique... vous devriez appeler votre patron. Il y a de fortes chances qu'il vous dise : “S'il vous plaît, ne faites pas ça”.
    Josh :
      Ou “Ne m'appelez pas, s'il vous plaît”.
    Engi :
      Toute demande qui sort de la norme. Imaginez que vous ne parlez jamais à cette personne de votre entreprise, mais qu'elle vous demande soudain votre date de naissance et votre numéro de sécurité sociale. C'est peut-être mieux de ne pas les donner. En ce qui concerne les e-mails, il faut surtout faire attention à la mauvaise grammaire, aux nombreuses fautes d'orthographe ou aux liens étranges. Un lien qui devrait être « Netflix » devient soudain « Netflixx ».
    Tom :
      Mais existe-t-il un moyen simple de distinguer un lien authentique d'un lien falsifié ?
    Engi :
      C'est une bonne question. Il y en a une ! La plupart du temps, les liens falsifiés sont assez évidents. On peut passer le curseur de la souris sur le lien pour voir l'adresse complète, et souvent il y a une adresse bizarre. Ainsi, au lieu de venir de Netflix.com, il vient de Netflix.com.321. Donc pas du vrai Netflix, mais d'un sous-domaine de quelque chose appelé 321. 
    Josh:
      . com.com, par exemple?
    Engi:
      Oui, .com.com ou .com.org ou quelque chose comme ça. Quand on est sur son PC, on peut généralement passer le curseur de la souris sur le lien et l'adresse complète s'affiche.
    Josh :
      .com.scam, juste pour être clair.
    Engi :
      Oui, absolument. C'est une méthode infaillible pour le découvrir. C'est un peu plus difficile, mais on peut aussi chercher des symboles remplacés. Au lieu de le rendre évident, ces attaquants pourraient échanger un grand O avec un 0 ou un grand I avec un petit l, ce qui est plus difficile à détecter. Si vous copiez le lien - sans cliquer dessus - sur l'un de ces sites qui vous disent quels caractères sont utilisés, vous pouvez déterminer s'il s'agit effectivement d'un O ou d'un 0, ou s'il s'agit de caractères cyrilliques (l'un de ces sites se trouve dans les liens ci-dessous).
    Josh :
      Il existe également des sites web sur lesquels on peut insérer un lien et qui nous disent alors s'il y a quelque chose d'étrange dedans. (l'un d'eux est également lié ci-dessous)
    Engi :
      C'est tout à fait ça.
      J'ai dit tout à l'heure qu'il fallait faire attention aux liens étranges et aux messages inattendus, même de la part de personnes que l'on connaît, et qu'il fallait faire attention à l'urgence. Quand on reçoit un tel message, la première chose à faire est de s'arrêter, même si cela semble urgent. Il faut y réfléchir. Il faut réfléchir à ce dont il s'agit vraiment, et on voit alors les choses beaucoup plus clairement. N'agissez pas à la hâte. Il ne faut pas faire quelque chose avant d'avoir vérifié si c'est vraiment ce que l'on doit faire. Comme je l'ai déjà dit, vous pouvez appeler votre CEO s'il vous a envoyé un e-mail et vérifier avec lui si c'est vraiment ce que vous devez faire. 
      Un autre bon conseil est d'utiliser l'authentification multi-facteurs ou l'authentification à deux facteurs. Ce sont ces petits messages que l'on reçoit sur son téléphone ou dans son e-mail pour obtenir une deuxième confirmation lorsqu'on se connecte à un compte.
      Si vous cliquez sur un lien ou saisissez une information et qu'au bout d'un moment, vous vous rendez compte que « je n'aurais peut-être pas dû », ne faites pas comme si cela ne s'était pas produit. C'est l'une des choses les plus importantes. Il faut le dire à votre service informatique. A votre chef. A quelqu'un d'autre. Ce n'est pas un embarras si quelque chose comme ça arrive. Peut-être qu'à ce moment-là, on aura l'impression d'être un idiot absolu. Enfin, j'ai déjà vécu cela. J'ai eu l'impression d'être un idiot absolu. Il faut juste être honnête avec ça. Car plus on est honnête sur ces choses, plus on peut éviter de se retrouver dans des situations encore plus difficiles. Par exemple, si tu cliques sur un lien, que tu donnes des informations, que tu n'en parles à personne et que ton entreprise se fait pirater à cause de cela ? eh bien, c'est de ta faute.
      Si tu vis exactement le même scénario, mais que tu réalises que ce n'était peut-être pas la meilleure décision et que tu le dis à quelqu'un, tu peux changer ton mot de passe. On peut modifier les informations que l'on a transmises au sein de l'entreprise, de sorte qu'elles ne soient plus correctes. On peut changer le code d'accès ou tout ce que l'on vient de transmettre. Le service informatique peut très probablement faire quelque chose à ce sujet si on l'en informe. Si on ne le leur dit pas, ils ne le sauront pas. Donc... il faut définitivement faire passer le mot.
      Et enfin, le dernier point : Il faut écouter son instinct. Si quelque chose semble étrange, il ne faut pas l'ignorer. Il faut aller au fond des choses, demander l'avis de quelqu'un d'autre ou utiliser l'un de ces vérificateurs de liens dont Josh a déjà parlé. Il ne faut pas le faire sans se poser de questions, même si cela semble bizarre.
    Josh :
      Et surtout, si vous avez l'impression que quelque chose est bizarre, vérifiez simplement. Si vous avez l'impression qu'il pourrait y avoir quelque chose, ce n'est généralement pas pour rien.
    Engi :
      C'est vrai ! 
      Venons-en maintenant aux implications juridiques et éthiques de toute cette histoire d'ingénierie sociale. L'ingénierie sociale en soi est illégale, mais cela peut devenir un peu flou, car il n'est pas toujours facile de mettre quelqu'un sur le dos. Si j'ai utilisé le tailgaiting et que j'ai obtenu l'accès à une parking, c'est évidemment illégal. Mais si je n'ai rien fait d'illégal là-bas, si je n'ai pas forcé de voiture ou volé quelque chose et que je l'ai fait uniquement parce que j'ai perdu mon ticket, il n'y a pas vraiment de raison de me punir.
    Josh :
      Tu veux dire que ce que tu as fait n'est pas « vraiment » illégal ? C'est-à-dire que ce n'est pas bien, mais ce n'est pas non plus illégal ?
    Engi:
      Oui, je veux dire que la partie « tailgating » était très discutable, mais je n'ai rien fait qui était « mal » dès le départ. Il existe cependant quelques cas où l'ingénierie sociale est vraiment grave et illégale. 
      Tout le monde en a déjà entendu parler : la fraude et l'usurpation d'identité. Le fait de tromper quelqu'un pour obtenir des données ou un accès est généralement poursuivi comme une fraude ou un accès non autorisé, même si l'on n'utilise pas d'outils de piratage spécifiques. Si vous volez l'identité de quelqu'un, c'est même hautement illégal.
      Il y a aussi des responsabilités. Par exemple, si l'entreprise ne vous forme pas à la protection des données de l'entreprise ou si elle omet de protéger les données, elle peut être poursuivie en vertu de lois telles que le RGPD.
      Ensuite, il y a le cas très particulier des tests d'intrusion. Peut-être que certains ne savent pas ce que sont les tests d'intrusion, mais en termes très simples, il s'agit de conclure un contrat avec une entreprise ou une personne qui testera vos systèmes pour en déceler les failles, vérifiera s'ils peuvent « pirater » vos systèmes et si vos collaborateurs sont formés contre l'ingénierie sociale. Mais c'est là que réside le problème : si le contrat ne stipule pas que cela est autorisé, c'est illégal, car il n'y a pas d'accord de la part de l'entreprise. On s'est « introduit » dans votre QG et on n'a probablement rien volé parce qu'on le fait pour des raisons professionnelles et non pour voler quelque chose, mais on a quand même fait quelque chose qui est techniquement illégal.
    Tom :
      Une entreprise peut-elle donc avoir des problèmes pour le phishing de ses propres employés ?
    Engi:
      Oui, absolument. S'il n'y a pas de contrat... Je veux dire, si on le fait dans le cadre d'une formation. Par exemple, si vous organisez une semaine de formation et que vous essayez de phisher vos propres employés, ils ont probablement signé un document disant que c'est ok. Mais si vous envoyez simplement des campagnes de phishing massives au hasard, sans leur demander la permission au préalable, alors c'est probablement illégal.
    Josh :
      Je suppose que Tom a parlé d'un test de l'entreprise et non de messages d'hameçonnage aléatoires.
    Engi :
      Oui, si l'entreprise le fait dans le cadre de son programme de formation et que vous signez un document au début du programme disant que c'est en ordre, alors c'est en ordre. Tant qu'il y a un contrat qui stipule ce que l'on peut faire et ce que l'on ne peut pas faire, et que l'on ne fait pas les choses que l'on ne peut pas faire, il ne devrait pas y avoir de problème. 
    Josh :
      Tu veux donc dire que ton contrat peut stipuler que tu pourrais recevoir des e-mails de phishing ? 
    Engi :
      Je ne dirais pas que cela est stipulé dans le contrat de travail initial. Cela dépend probablement aussi de l'endroit où l'on travaille, mais je veux dire, oui, si l'entreprise conduit régulièrement des formations de sensibilisation et teste régulièrement ses employés, cela figure peut-être dans le contrat. Cependant, je dirais que si l'entreprise n'organise qu'une semaine de formation, vous recevrez probablement un document le premier jour disant que c'est en ordre. 
      Comme je l'ai déjà dit, même quelque chose que l'on ne fait pas par mauvaise volonté ou avec une intention malveillante peut être durement sanctionné. Par exemple, si je pirate une banque et qu'en fait je ne fais rien, mais que je trouve simplement une faille dans leurs systèmes (et que je la teste), c'est toujours illégal et la banque peut quand même gagner un procès contre moi. Sauf si j'avais un contrat avec eux qui m'autorisait à le faire.
      C'est vrai, et puis le tout dernier point pour clore ce sujet. Vous savez probablement que les ordinateurs ont des firewalls.
    Josh :
      Mais qu'est-ce qu'un firewall exactement ?
    Engi:
      Un firewall est un « système » sur l'ordinateur qui fonctionne de la même manière qu'un antivirus, non pas pour les logiciels malveillants, mais pour le réseau. Il est là pour protéger l'ordinateur.
    Josh :
      Il suffit donc de le télécharger et de l'installer sur l'ordinateur ?
    Engi :
      Normalement, il est déjà installé sur l'ordinateur quand on le reçoit.
    Josh :
      C'est pratique.
    Engi :
      Oui, c'est ça. Et comme je l'ai dit, on peut avoir le meilleur équipement de sécurité, le meilleur détecteur de logiciels malveillants et le meilleur firewall du monde, mais si un employé donne son mot de passe à n'importe quelle personne au hasard ... eh bien, c'est comme ça. Cette personne se connecte à l'entreprise « sécurisée » et accède ainsi à toutes sortes d'informations. 
      Ici aussi, je voudrais mentionner qu'il est vraiment important de mener des formations de sensibilisation, de travailler avec les employés et de leur expliquer pourquoi ils devraient utiliser l'authentification à deux facteurs ou pourquoi ils devraient faire attention à ce qu'ils disent ou à ce qu'ils communiquent aux autres. Tout cela peut aussi être amusant si l'on organise des ateliers basés sur des scénarios et, comme Tom l'a déjà mentionné, si l'on simule des tests de phishing - à condition d'avoir l'autorisation de le faire - et l'on pourrait même créer des jeux ou des quiz pour que les employés s'amusent davantage et n'aient pas l'impression d'être une corvée.
      Le but n'est pas de créer des personnes parfaites qui ne cliquent jamais sur un lien d'hameçonnage, mais de rendre les employés suffisamment confiants pour remettre les choses en question et ne pas se contenter de répondre et de transférer les 500 000 euros, mais de se demander : « Est-ce que je devrais le faire ? » et de dire : "Cela ne semble pas correct. Je vais le vérifier à nouveau avec quelqu'un". 
      Avant de conclure : Y a-t-il quelque chose que vous voulez demander, peut-être que quelque chose n'était pas très clair ?
    Josh :
      Hm, non, pas vraiment.
    Tom :
      Juste un mot sur l'aspect légal et éthique. Est-ce un crime de se faire passer pour son patron dans un e-mail ?
    Engi :
      Eh bien oui... Probablement oui. 
    Josh :
      Pourquoi ferais-tu cela ?
    Engi :
      Oui, pourquoi le ferais-tu ? Mais si tu le fais... eh bien, si ton patron t'a dit : “Tu vas écrire un e-mail, tu vas être moi, tu vas écrire ceci et cela”, c'est légal. Mais si tu fais juste semblant d'être ton patron et que tu dis à quelqu'un : “Hé, envoie-moi 10.000 euros”, ce n'est pas très légal et tu auras probablement beaucoup d'ennuis pour ça.
    Josh:
      Alors, ne prétends pas être ton chef.
    Engi :
      Oui, s'il te plaît, Tom, ne fais pas ça.
    Josh :
      Ou ne prétends pas être quelqu'un d'autre.
    Tom :
      Je ne le ferai pas.
    Engi :
      Oui, sois toi-même.
      Même si tu fais quelque chose juste pour une blague, ou si c'est juste une blague pour toi, cela peut avoir des conséquences très négatives, et tu ne devrais vraiment pas faire quelque chose comme ça, à moins que ce soit dans un environnement totalement contrôlé, où le pire qui puisse arriver est que quelqu'un soit gêné. Mais si cela a vraiment des conséquences dans la vie réelle, il faudrait peut-être y réfléchir à deux fois avant de le faire.
      En résumé, l'ingénierie sociale ne requiert pas de compétences en matière de piratage informatique, il n'est pas nécessaire de savoir utiliser des outils informatiques avancés. Il faut simplement que la personne sache comment les autres pensent. Et c'est ce qui rend cette pratique si dangereuse. Nous pouvons tous tomber dans le panneau. Surtout quand on est déjà stressé au travail, qu'on n'a pas bien dormi et que notre cerveau ne fonctionne pas aussi bien que d'habitude... et qu'on reçoit un message de notre patron nous demandant de faire quelque chose, et qu'on le fait... et bien, c'est arrivé. Et maintenant, c'est trop tard. Et on vient de transférer 500 000 euros sur un compte bancaire douteux. 
      Si quelque chose arrive, il vaut mieux être honnête dès le départ et dire : « Hé, il s'est passé quelque chose, c'était un accident », et régler l'affaire avec ses collègues, plutôt que de faire comme si rien ne s'était passé et d'avoir encore plus de problèmes.
      Voilà, c'est tout pour cet épisode, j'espère que vous avez appris quelque chose et j'espère que vous l'avez apprécié et que vous resterez connectés pour notre prochain épisode, qui portera sur la sécurité des mots de passe. C'est tout pour nous, et n'hésitez pas à faire un tour sur notre site et à nous contacter si vous avez quelque chose à nous dire ou à nous demander. Et... oui.
      Restez en sécurité et ne cliquez pas sur des liens bizarres !
    Tom :
      Au revoir !
    Josh :
      Au revoir !
default_transcript_language: en
---

# Welcome to Episode 1

## Resources

View what characters are being used in a sentence: https://www.soscisurvey.de/tools/view-chars.php

Link checker:
https://nordvpn.com/link-checker/
