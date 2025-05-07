const loadUsers = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
  
    if (!response.ok) {
      throw new Error(`GitHub API returned status code ${response.status}`);
    }
  
    const user = await response.json();
    return user;
  };
  
  const loadRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
  
    if (!response.ok) {
      throw new Error(`Erro ao buscar repositórios: ${response.status}`);
    }
  
    const repos = await response.json();
    return repos;
  };
  
  const loadEvents = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
  
    if (!response.ok) {
      throw new Error(`Erro ao buscar eventos: ${response.status}`);
    }
  
    const events = await response.json();
    return events;
  };
  
  const loadALL = async () => {
    const username = 'Jonemanuel'; // Você pode substituir por outro username
  
    try {
      const user = await loadUsers(username);
      console.log('Usuário:', user);
  
      const repos = await loadRepositories(username);
      console.log('Repositórios:');
      repos.forEach(repo => {
        console.log(`- ${repo.name}: ${repo.html_url}`);
      });
  
      const events = await loadEvents(username);
      console.log('Eventos recentes:');
      events.slice(0, 5).forEach(event => {
        console.log(`- Tipo: ${event.type}, Repositório: ${event.repo.name}`);
      });
    } catch (error) {
      console.error('Erro:', error.message);
    }
  };
  
  loadALL();
  