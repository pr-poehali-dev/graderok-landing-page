import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Database",
      title: "Крупнейшая база техники",
      description: "100+ единиц проверенной спецтехники",
    },
    {
      icon: "Users",
      title: "Мгновенное подключение",
      description: "К 50+ владельцам техники",
    },
    {
      icon: "TrendingDown",
      title: "Экономия до 30%",
      description: "За счёт прямых договоров",
    },
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Без выходных и праздников",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      icon: "Search",
      title: "Выберите технику",
      description: "Найдите нужную спецтехнику в каталоге бота за 1 минуту",
    },
    {
      step: "2",
      icon: "FileCheck",
      title: "Забронируйте",
      description: "Оформите заявку прямо в Telegram без звонков и очередей",
    },
    {
      step: "3",
      icon: "Shield",
      title: "Получите гарантию",
      description: "Страховка на весь срок аренды включена автоматически",
    },
    {
      step: "4",
      icon: "Truck",
      title: "Получите технику",
      description: "Техника приедет в указанное место и время работы",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/a138a8d6-5bee-464d-8c07-3dfcec8a23f6.png" 
                alt="Грейдерок" 
                className="h-32 w-32 md:h-40 md:w-40 rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Sparkles" size={16} />
              <span>Самый быстрый сервис аренды спецтехники</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              ГРЕЙДЕРОК
            </h1>
            
            <p className="mb-4 text-xl text-white/90 md:text-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ваш надёжный помощник в аренде спецтехники
            </p>
            
            <p className="mb-8 text-base text-white/70 md:text-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Бронируйте технику за 5 минут без звонков и очередей
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="group w-full bg-primary text-lg font-semibold hover:bg-primary/90 sm:w-auto"
                onClick={() => window.open('https://t.me/graderokbot', '_blank')}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Открыть бота
                <Icon name="ArrowRight" size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/20 bg-white/10 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Каталог техники
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-20 left-1/2 h-40 w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Ключевые преимущества
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Мы не просто бот – мы полноценная экосистема для аренды спецтехники
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 p-6 transition-all hover:border-primary hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name={advantage.icon as any} size={28} />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Как это работает
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Простой процесс от выбора техники до начала работы
            </p>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                        <Icon name={step.icon as any} size={24} />
                      </div>
                      
                      <h3 className="mb-2 text-2xl font-semibold">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {index < howItWorks.length - 1 && (
                    <div className="absolute left-8 top-20 hidden h-full w-0.5 bg-gradient-to-b from-primary to-transparent md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-primary text-lg font-semibold hover:bg-primary/90"
              onClick={() => window.open('https://t.me/graderokbot', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Начать работу
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-primary/10 blur-3xl" />
            
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Готовы начать?
              </h2>
              
              <p className="mb-8 text-lg text-muted-foreground">
                Откройте бота прямо сейчас и получите доступ к 100+ единицам спецтехники
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="w-full bg-primary text-lg font-semibold hover:bg-primary/90 sm:w-auto"
                  onClick={() => window.open('https://t.me/graderokbot', '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Открыть Telegram бота
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg font-semibold sm:w-auto"
                  onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Наше сообщество
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-secondary py-12 text-white/70">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white">ГРЕЙДЕРОК</p>
              <p className="text-sm">Надёжный помощник в аренде спецтехники</p>
            </div>
            
            <div className="flex gap-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white"
                onClick={() => window.open('https://t.me/graderokbot', '_blank')}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Telegram бот
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white"
                onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}
              >
                <Icon name="Users" size={18} className="mr-2" />
                Сообщество
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm">
            <p>© 2025 Грейдерок. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;