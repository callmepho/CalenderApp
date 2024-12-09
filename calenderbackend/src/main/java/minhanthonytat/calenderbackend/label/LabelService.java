package minhanthonytat.calenderbackend.label;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LabelService {  
  
  @Autowired
  private LabelRepository labelRepository;
  
  public List<Label> findAll(){
    return this.labelRepository.findAll();
  }

  public boolean deleteById(Long id){
    Optional<Label> foundLabel = this.labelRepository.findById(id);
    if(foundLabel.isPresent()){
      this.labelRepository.delete(foundLabel.get());
      return true;
    }
    return false;
  }

  public Label create(LabelCreateDTO data){
    String name = data.getName();

    if (labelRepository.existsByName(name)) {
      throw new IllegalArgumentException("Label with name '" + name + "' already exists.");
    }
    
    Label newLabel = new Label(name);
    Label created = this.labelRepository.save(newLabel);
    return created;
   }

   public Optional<Label> findById(Long id){
    Optional<Label> foundLabel = this.labelRepository.findById(id);
    return foundLabel;
  }
  
  public Label getLabelByName(String name) {
    return labelRepository.findByName(name)
            .orElseThrow(() -> new IllegalArgumentException("Label not found with name: " + name));
}
}
