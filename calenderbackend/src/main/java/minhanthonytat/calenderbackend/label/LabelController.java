package minhanthonytat.calenderbackend.label;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import minhanthonytat.calenderbackend.exceptions.NotFoundException;



@RestController
@RequestMapping("/labels")
public class LabelController {

  @Autowired
  private LabelService labelService;
  
  @GetMapping
  public ResponseEntity<List<Label>> getAll(){
    List<Label> allLabels = this.labelService.findAll();
    return new ResponseEntity<>(allLabels,HttpStatus.OK);
  }

  @GetMapping("/by-name")
  public ResponseEntity<Label> getLabelByName(@RequestParam String name) {
      Label label = labelService.getLabelByName(name);
      return ResponseEntity.ok(label);
  }

  @PostMapping
  public ResponseEntity<Label> create(@Valid @RequestBody LabelCreateDTO data){
    Label newLabel = this.labelService.create(data);
    return new ResponseEntity<>(newLabel,HttpStatus.CREATED);
  }

   @DeleteMapping("/{id}")
	public ResponseEntity<Label> deleteById(@PathVariable Long id) {
		boolean deleted = this.labelService.deleteById(id);

		if(deleted == true) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}

		throw new NotFoundException(String.format("Label with id: %d does not exist, could not delete", id));
	}

}
